
'use client'

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, ZoomIn, ZoomOut, Upload, Download, FileText, X } from 'lucide-react';
import Banner from './banner/Banner';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';

if (typeof window !== 'undefined' && 'Worker' in window) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';
}

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function Page({ content, isLeft, isFlipping, flipProgress, onDragStart, onDrag, onDragEnd, pageNumber, totalPages, showCorner, onCornerHover, onCornerLeave, onCornerClick, style }) {
  const pageRef = useRef(null);
  // Calculate transform and shadow
  const angle = flipProgress * 180 * (isLeft ? 1 : -1);
  const shadowOpacity = Math.abs(flipProgress) * 0.5 + (isFlipping ? 0.2 : 0);
  const shadowOffset = Math.abs(flipProgress) * 30 * (isLeft ? -1 : 1);
  // Curl effect: show a gradient overlay at the flipping edge
  const curlStrength = Math.abs(flipProgress);
  const curlGradient = isLeft
    ? `linear-gradient(270deg, rgba(0,0,0,${0.15 * curlStrength}) 0%, rgba(0,0,0,0) 80%)`
    : `linear-gradient(90deg, rgba(0,0,0,${0.15 * curlStrength}) 0%, rgba(0,0,0,0) 80%)`;

  // Touch event handlers for mobile drag-to-flip
  const handleTouchStart = (e) => {
    if (onDragStart) onDragStart(isLeft ? 'left' : 'right', e);
  };
  const handleTouchMove = (e) => {
    if (onDrag) onDrag(e);
  };
  const handleTouchEnd = (e) => {
    if (onDragEnd) onDragEnd(e);
  };

  // Remove isMobile and pageStyle logic, just use style as passed
  return (
    <div
      ref={pageRef}
      style={{
        ...style,
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: `rotateY(${angle}deg)`,
        transition: isFlipping ? 'transform 0.5s cubic-bezier(0.4,0.2,0.2,1)' : 'none',
        boxShadow: `${shadowOffset}px 0 40px rgba(0,0,0,${shadowOpacity})`,
        zIndex: isFlipping ? 100 : 1,
        cursor: showCorner ? 'grab' : 'default',
        background: '#fff',
        overflow: 'hidden',
        touchAction: 'pan-y',
      }}
      onMouseDown={e => onDragStart && onDragStart(isLeft ? 'left' : 'right', e)}
      onMouseMove={onDrag}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Page content */}
      <div style={{ width: '100%', height: '100%', pointerEvents: 'none', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
        {content && React.isValidElement(content) && content.type === 'img'
          ? React.cloneElement(content, {
              style: {
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                background: '#fff',
                display: 'block',
                ...content.props.style,
              },
            })
          : content}
      </div>
      {/* Curl gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: isLeft ? 0 : 'unset',
        right: isLeft ? 'unset' : 0,
        width: '40px',
        height: '100%',
        background: curlGradient,
        pointerEvents: 'none',
        zIndex: 2,
        transition: 'background 0.2s',
      }} />
      {/* Interactive corner with curl visual */}
      {showCorner && (
        <div
          onMouseEnter={onCornerHover}
          onMouseLeave={onCornerLeave}
          onClick={onCornerClick}
          style={{
            position: 'absolute',
            bottom: 0,
            [isLeft ? 'left' : 'right']: 0,
            width: 48,
            height: 48,
            background: `radial-gradient(circle at 80% 80%, #fbbf24 0%, #fff0 80%)`,
            opacity: 0.85,
            cursor: 'pointer',
            zIndex: 10,
            borderBottomLeftRadius: isLeft ? 48 : 0,
            borderBottomRightRadius: isLeft ? 0 : 48,
            boxShadow: `0 8px 24px 0 rgba(251,191,36,0.25)`,
            transition: 'opacity 0.2s',
          }}
        />
      )}
      {/* Page number */}
      <div style={{
        position: 'absolute',
        bottom: 8,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 12,
        color: '#aaa',
        pointerEvents: 'none',
        zIndex: 3,
      }}>{pageNumber} / {totalPages}</div>
    </div>
  );
}

const PAGE_FLIP_SOUND = '/assets/sounds/page-flip.mp3';

const FlipBook = () => {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('');
  const [zoom, setZoom] = useState(1);
  const [pages, setPages] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [styles, setStyles] = useState({});
  const [isMounted, setIsMounted] = useState(false);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [renderedPages, setRenderedPages] = useState([]);
  const pageFlipAudioRef = useRef(null);

  // Add to FlipBook state
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);
  const [flipProgress, setFlipProgress] = useState(0); // -1 (fully left) to 1 (fully right)
  const [dragPage, setDragPage] = useState(null); // 'left' or 'right' or null
  const [jumpPageInput, setJumpPageInput] = useState('');

  const totalPages = useMemo(() => pages.length, [pages]);
  const totalSpreads = useMemo(() => Math.ceil(totalPages / 2), [totalPages]);

  const playPageFlipSound = useCallback(() => {
    if (pageFlipAudioRef.current) {
      pageFlipAudioRef.current.currentTime = 0;
      pageFlipAudioRef.current.play();
    }
  }, []);

  const nextSpread = useCallback(() => {
    if (currentSpread < totalSpreads - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('forward');
      playPageFlipSound();
      setTimeout(() => {
        setCurrentSpread(prev => prev + 1);
        setTimeout(() => {
          setIsFlipping(false);
          setFlipDirection('');
        }, 100);
      }, 300);
    }
  }, [currentSpread, isFlipping, totalSpreads, playPageFlipSound]);

  const previousSpread = useCallback(() => {
    if (currentSpread > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('backward');
      playPageFlipSound();
      setTimeout(() => {
        setCurrentSpread(prev => prev - 1);
        setTimeout(() => {
          setIsFlipping(false);
          setFlipDirection('');
        }, 100);
      }, 300);
    }
  }, [currentSpread, isFlipping, playPageFlipSound]);

  // Handle mounting state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Set up inline styles using useEffect
  useEffect(() => {
    if (!isMounted) return;
    
    const isMobile = window.innerWidth < 768;
    
    setStyles({
      container: {
        minHeight: '100vh',
        background: 'bluebg-cyan-400/30 ',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      },
      toolbar: {
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #e2e8f0',
        backdropFilter: 'blur(10px)'
      },
      toolbarTitle: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        flexWrap: 'wrap'
      },
      title: {
        color: '#1e293b',
        fontSize: '24px',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      },
      spreadInfo: {
        color: '#64748b',
        fontSize: '14px',
        fontWeight: '500'
      },
      controls: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap'
      },
      uploadButton: {
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px 0 rgba(59, 130, 246, 0.35)'
      },
      zoomControls: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        background: '#f1f5f9',
        borderRadius: '12px',
        padding: '4px'
      },
      zoomButton: {
        padding: '8px',
        color: '#374151',
        background: 'transparent',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      },
      mainContainer: {
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px',
        position: 'relative'
      },
      bookWrapper: {
        position: 'relative',
        filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))'
      },
      navButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: '30',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '50%',
        padding: '16px',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '56px',
        height: '56px'
      },
      leftNavButton: {
        left: '16px'
      },
      rightNavButton: {
        right: '16px'
      },
      bookContainer: {
        perspective: '2000px',
        position: 'relative'
      },
      book: {
        display: 'flex',
        background: 'linear-gradient(135deg, #92400e 0%, #78350f 100%)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        border: '2px solid #a16207'
      },
      page: {
        width: '384px',
        height: '500px',
        position: 'relative',
        background: '#ffffff',
        overflow: 'hidden'
      },
      spine: {
        width: '20px',
        background: 'linear-gradient(90deg, #b45309 0%, #fbbf24 100%)',
        boxShadow: 'inset 0 0 18px rgba(0,0,0,0.4), 0 0 12px 2px #fbbf24',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      spineDetail: {
        width: '2px',
        height: '75%',
        background: '#a16207',
        borderRadius: '1px'
      },
      pageIndicators: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '32px',
        gap: '8px'
      },
      indicator: {
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      },
      instructions: {
        background: 'rgba(255, 255, 255, 0.9)',
        borderTop: '1px solid #e2e8f0',
        padding: '16px',
        textAlign: 'center',
        backdropFilter: 'blur(10px)'
      },
      uploadZone: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '1000',
        backdropFilter: 'blur(5px)'
      },
      uploadModal: {
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '500px',
        width: '90%',
        textAlign: 'center',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
        position: 'relative'
      }
    });

    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      setStyles(prevStyles => ({
        ...prevStyles,
        toolbar: {
          ...prevStyles.toolbar,
          padding: newIsMobile ? '8px' : '20px'
        },
        page: {
          ...prevStyles.page,
          width: newIsMobile ? '90vw' : '384px',
          height: newIsMobile ? '60vw' : '500px',
          maxWidth: newIsMobile ? '95vw' : undefined,
          maxHeight: newIsMobile ? '70vw' : undefined,
          margin: newIsMobile ? '0 auto' : undefined,
        },
        book: {
          ...prevStyles.book,
          flexDirection: newIsMobile ? 'column' : 'row',
          width: newIsMobile ? '95vw' : undefined,
          maxWidth: newIsMobile ? '98vw' : undefined,
          minWidth: newIsMobile ? '0' : undefined,
          minHeight: newIsMobile ? '0' : undefined,
        },
        navButton: {
          ...prevStyles.navButton,
          padding: newIsMobile ? '8px' : '16px',
          width: newIsMobile ? '36px' : '56px',
          height: newIsMobile ? '36px' : '56px',
        },
        leftNavButton: {
          ...prevStyles.leftNavButton,
          left: newIsMobile ? '2px' : '16px',
        },
        rightNavButton: {
          ...prevStyles.rightNavButton,
          right: newIsMobile ? '2px' : '16px',
        },
        spine: {
          ...prevStyles.spine,
          width: newIsMobile ? '8px' : '20px',
        },
        spineDetail: {
          ...prevStyles.spineDetail,
          width: newIsMobile ? '1px' : '2px',
        },
        pageIndicators: {
          ...prevStyles.pageIndicators,
          marginTop: newIsMobile ? '12px' : '32px',
          gap: newIsMobile ? '4px' : '8px',
        },
        indicator: {
          ...prevStyles.indicator,
          width: newIsMobile ? '8px' : '12px',
          height: newIsMobile ? '8px' : '12px',
        },
        instructions: {
          ...prevStyles.instructions,
          padding: newIsMobile ? '8px' : '16px',
        },
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted]);

  // Only use the PDF pages loaded from the static PDF
  const renderPdfPages = useCallback(async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    setPdfDoc(pdf);
    const numPages = pdf.numPages;
    const pageImages = [];
    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const context = canvas.getContext('2d');
      await page.render({ canvasContext: context, viewport }).promise;
      const imgUrl = canvas.toDataURL();
      pageImages.push({
        id: i - 1,
        content: (
          <img
            src={imgUrl}
            alt={`PDF page ${i}`}
            style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#fff', display: 'block' }}
          />
        )
      });
    }
    setRenderedPages(pageImages);
    setPages(pageImages);
    setCurrentSpread(0);
  }, []);

  // In FlipBook, on mount, fetch and render the static PDF
  useEffect(() => {
    if (!isMounted) return;
    const fetchStaticPdf = async () => {
      const response = await fetch('/assets/pdfs/1...pdf');
      const blob = await response.blob();
      const file = new File([blob], 'company-profile.pdf', { type: 'application/pdf' });
      await renderPdfPages(file);
    };
    fetchStaticPdf();
  }, [isMounted]);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      // handleFileUpload(files[0]); // Removed upload logic
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  // Add drag handlers
  const handlePageDragStart = (side, e) => {
    setDragging(true);
    setDragPage(side);
    setDragStartX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const handlePageDrag = (e) => {
    if (!dragging || dragStartX === null) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = clientX - dragStartX;
    const width = window.innerWidth / 2;
    let progress = clamp(delta / width, -1, 1);
    if (dragPage === 'left') progress = clamp(progress, -1, 0);
    if (dragPage === 'right') progress = clamp(progress, 0, 1);
    setFlipProgress(progress);
  };
  const handlePageDragEnd = () => {
    if (!dragging) return;
    if (dragPage === 'left' && flipProgress < -0.5) {
      previousSpread();
    } else if (dragPage === 'right' && flipProgress > 0.5) {
      nextSpread();
    }
    setDragging(false);
    setDragStartX(null);
    setFlipProgress(0);
    setDragPage(null);
  };

  // Download functionality
  const handleDownload = async () => {
    const url = '/assets/pdfs/1...pdf';
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'company-profile.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    } catch (err) {
      alert('Failed to download PDF.');
    }
  };

  const zoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2));
  const zoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const resetZoom = () => setZoom(1);

  // Only render current spread for performance
  const getCurrentPages = () => {
    const leftPageIndex = currentSpread * 2;
    const rightPageIndex = leftPageIndex + 1;
    const sourcePages = renderedPages.length > 0 ? renderedPages : pages;
    return {
      leftPage: sourcePages[leftPageIndex] || null,
      rightPage: rightPageIndex < sourcePages.length ? sourcePages[rightPageIndex] : null
    };
  };

  const { leftPage, rightPage } = getCurrentPages();

  // Don't render anything until mounted (prevents SSR issues)
  if (!isMounted) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #fef7cd 0%, #fed7aa 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  // Restore the main return block
  return (
    <div 
      style={styles.container}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      aria-label="Company Profile FlipBook"
    >
      <Banner
        imagesource={'/assets/images/marvelous.png'}
        title='Company Profile' 
        content='Take your time to curate our company profile to know more about our company structure, registration, experiences, and many others'
      />
      {/* Toolbar */}
      <div style={styles.toolbar}>
        <div style={styles.toolbarTitle}>
          <h1 style={styles.title}>Ihemsadiele</h1>
          <span style={styles.spreadInfo}>
            Spread {currentSpread + 1} of {totalSpreads}
          </span>
        </div>
        <div style={styles.controls}>
          <a
            href="/assets/pdfs/1...pdf"
            download="company-profile.pdf"
            style={{
              ...styles.uploadButton,
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              boxShadow: '0 4px 15px 0 rgba(5, 150, 105, 0.35)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={16} />
            <span>Download</span>
          </a>
          <div style={styles.zoomControls}>
            <button
              onClick={zoomOut}
              style={{
                ...styles.zoomButton,
                opacity: zoom <= 0.5 ? 0.5 : 1,
                cursor: zoom <= 0.5 ? 'not-allowed' : 'pointer'
              }}
              disabled={zoom <= 0.5}
              onMouseEnter={(e) => {
                if (zoom > 0.5) e.target.style.background = 'white';
              }}
              onMouseLeave={(e) => {
                if (zoom > 0.5) e.target.style.background = 'transparent';
              }}
            >
              <ZoomOut size={16} />
            </button>
            <span style={{ color: '#374151', padding: '0 8px', fontSize: '14px', fontWeight: '500' }}>
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={zoomIn}
              style={{
                ...styles.zoomButton,
                opacity: zoom >= 2 ? 0.5 : 1,
                cursor: zoom >= 2 ? 'not-allowed' : 'pointer'
              }}
              disabled={zoom >= 2}
              onMouseEnter={(e) => {
                if (zoom < 2) e.target.style.background = 'white';
              }}
              onMouseLeave={(e) => {
                if (zoom < 2) e.target.style.background = 'transparent';
              }}
            >
              <ZoomIn size={16} />
            </button>
            <button
              onClick={resetZoom}
              style={styles.zoomButton}
              onMouseEnter={(e) => e.target.style.background = 'white'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>
      </div>
      {/* FlipBook Container */}
      <div style={styles.mainContainer}>
        <div style={styles.bookWrapper}>
          {/* Navigation Buttons */}
          <button
            onClick={previousSpread}
            disabled={currentSpread === 0 || isFlipping}
            style={{
              ...styles.navButton,
              ...styles.leftNavButton,
              opacity: currentSpread === 0 || isFlipping ? 0.5 : 1,
              cursor: currentSpread === 0 || isFlipping ? 'not-allowed' : 'pointer',
              pointerEvents: currentSpread === 0 || isFlipping ? 'none' : 'auto'
            }}
            onMouseEnter={(e) => {
              if (currentSpread > 0 && !isFlipping) {
                e.target.style.background = 'white';
                e.target.style.transform = 'translateY(-50%) scale(1.1)';
                e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentSpread > 0 && !isFlipping) {
                e.target.style.background = 'rgba(255, 255, 255, 0.95)';
                e.target.style.transform = 'translateY(-50%) scale(1)';
                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
              }
            }}
          >
            <ChevronLeft 
              size={isMounted && window.innerWidth < 768 ? 20 : 28} 
              style={{ color: '#374151' }} 
            />
          </button>
          <button
            onClick={nextSpread}
            disabled={currentSpread === totalSpreads - 1 || isFlipping}
            style={{
              ...styles.navButton,
              ...styles.rightNavButton,
              opacity: currentSpread === totalSpreads - 1 || isFlipping ? 0.5 : 1,
              cursor: currentSpread === totalSpreads - 1 || isFlipping ? 'not-allowed' : 'pointer',
              pointerEvents: currentSpread === totalSpreads - 1 || isFlipping ? 'none' : 'auto'
            }}
            onMouseEnter={(e) => {
              if (currentSpread < totalSpreads - 1 && !isFlipping) {
                e.target.style.background = 'white';
                e.target.style.transform = 'translateY(-50%) scale(1.1)';
                e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentSpread < totalSpreads - 1 && !isFlipping) {
                e.target.style.background = 'rgba(255, 255, 255, 0.95)';
                e.target.style.transform = 'translateY(-50%) scale(1)';
                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
              }
            }}
          >
            <ChevronRight 
              size={isMounted && window.innerWidth < 768 ? 20 : 28} 
              style={{ color: '#374151' }} 
            />
          </button>
          {/* Book Container */}
          <div style={{ ...styles.bookContainer, transform: `scale(${zoom})` }}>
            <div style={styles.book}>
              {/* Left Page */}
              <Page
                content={leftPage && leftPage.content}
                isLeft={true}
                isFlipping={isFlipping}
                flipProgress={isFlipping ? (flipDirection === 'forward' ? 1 : -1) : 0}
                onDragStart={() => setIsFlipping(true)}
                onDrag={(e) => {
                  const deltaX = e.clientX - e.target.getBoundingClientRect().left;
                  const deltaY = e.clientY - e.target.getBoundingClientRect().top;
                  const centerX = e.target.getBoundingClientRect().width / 2;
                  const centerY = e.target.getBoundingClientRect().height / 2;
                  const angle = (deltaX - centerX) / centerX * 10; // Simple drag angle
                  setFlipDirection(deltaX > centerX ? 'forward' : 'backward');
                  setFlipProgress(clamp(angle, -1, 1));
                }}
                onDragEnd={() => {
                  setIsFlipping(false);
                  setFlipProgress(0);
                  setFlipDirection('');
                }}
                pageNumber={currentSpread * 2 + 1}
                totalPages={totalPages}
                showCorner={true}
                onCornerHover={() => setIsFlipping(true)}
                onCornerLeave={() => setIsFlipping(false)}
                onCornerClick={() => {
                  if (currentSpread > 0) {
                    setCurrentSpread(prev => prev - 1);
                  }
                }}
                style={styles.page}
              />
              {/* Book Spine */}
              <div style={styles.spine}>
                <div style={styles.spineDetail}></div>
              </div>
              {/* Right Page */}
              <Page
                content={rightPage && rightPage.content}
                isLeft={false}
                isFlipping={isFlipping}
                flipProgress={isFlipping ? (flipDirection === 'forward' ? 1 : -1) : 0}
                onDragStart={() => setIsFlipping(true)}
                onDrag={(e) => {
                  const deltaX = e.clientX - e.target.getBoundingClientRect().left;
                  const deltaY = e.clientY - e.target.getBoundingClientRect().top;
                  const centerX = e.target.getBoundingClientRect().width / 2;
                  const centerY = e.target.getBoundingClientRect().height / 2;
                  const angle = (centerX - deltaX) / centerX * 10; // Simple drag angle
                  setFlipDirection(deltaX > centerX ? 'forward' : 'backward');
                  setFlipProgress(clamp(angle, -1, 1));
                }}
                onDragEnd={() => {
                  setIsFlipping(false);
                  setFlipProgress(0);
                  setFlipDirection('');
                }}
                pageNumber={currentSpread * 2 + 2}
                totalPages={totalPages}
                showCorner={true}
                onCornerHover={() => setIsFlipping(true)}
                onCornerLeave={() => setIsFlipping(false)}
                onCornerClick={() => {
                  if (currentSpread < totalSpreads - 1) {
                    setCurrentSpread(prev => prev + 1);
                  }
                }}
                style={styles.page}
              />
            </div>
          </div>
          {/* Page Indicators */}
          <div style={styles.pageIndicators}>
            {Array.from({ length: totalSpreads }, (_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isFlipping && index !== currentSpread) {
                    setCurrentSpread(index);
                  }
                }}
                style={{
                  ...styles.indicator,
                  background: index === currentSpread ? '#d97706' : '#fed7aa',
                  transform: index === currentSpread ? 'scale(1.25)' : 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  if (index !== currentSpread) {
                    e.target.style.background = '#f59e0b';
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== currentSpread) {
                    e.target.style.background = '#fed7aa';
                  }
                }}
              />
            ))}
            {/* Jump to page input */}
            <form
              onSubmit={e => {
                e.preventDefault();
                const pageNum = parseInt(jumpPageInput, 10);
                if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
                  setCurrentSpread(Math.floor((pageNum - 1) / 2));
                  setJumpPageInput('');
                }
              }}
              style={{ display: 'inline-flex', alignItems: 'center', marginLeft: 16 }}
            >
              <input
                type="number"
                min={1}
                max={totalPages}
                value={jumpPageInput}
                onChange={e => setJumpPageInput(e.target.value)}
                placeholder="Go to page"
                style={{
                  width: 60,
                  fontSize: 12,
                  padding: '2px 6px',
                  borderRadius: 6,
                  border: '1px solid #d1d5db',
                  marginRight: 4,
                }}
              />
              <button
                type="submit"
                style={{
                  fontSize: 12,
                  padding: '2px 8px',
                  borderRadius: 6,
                  border: 'none',
                  background: '#fbbf24',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >Go</button>
            </form>
          </div>
        </div>
      </div>
      {/* Instructions */}
      <div style={styles.instructions}>
        <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
          Use arrow keys, navigation buttons, or drag & drop PDF files • Enhanced with upload/download functionality
        </p>
      </div>
      {/* Drag Over Overlay */}
      {isDragOver && (
        <div style={styles.uploadZone}>
          <div style={styles.uploadModal}>
            <Upload size={48} style={{ color: '#3b82f6', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>
              Drop PDF Here
            </h3>
            <p style={{ color: '#6b7280', margin: 0 }}>
              Release to upload your PDF file
            </p>
          </div>
        </div>
      )}
      {/* Hidden File Input */}
      {/* Removed hidden file input */}
      {/* Page flip sound */}
      <audio ref={pageFlipAudioRef} src={PAGE_FLIP_SOUND} preload="auto" />
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes flipForward {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(-90deg) translateZ(50px);
          }
          100% {
            transform: rotateY(-180deg);
          }
        }
        @keyframes flipBackward {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(90deg) translateZ(50px);
          }
          100% {
            transform: rotateY(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default FlipBook;