
'use client'

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, ZoomIn, ZoomOut, Upload, Download, FileText, X } from 'lucide-react';
import Banner from './banner/Banner';
import { samplePages } from './data';

const FlipBook = () => {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('');
  const [zoom, setZoom] = useState(1);
  const [pdfFile, setPdfFile] = useState(null);
  const [pages, setPages] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [styles, setStyles] = useState({});
  const [isMounted, setIsMounted] = useState(false);
  const fileInputRef = useRef(null);

  const memoizedPages = useMemo(() => samplePages, []);

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
        padding: isMobile ? '12px' : '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #e2e8f0',
        backdropFilter: 'blur(10px)'
      },
      toolbarTitle: {
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '8px' : '16px',
        flexWrap: 'wrap'
      },
      title: {
        color: '#1e293b',
        fontSize: isMobile ? '18px' : '24px',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      },
      spreadInfo: {
        color: '#64748b',
        fontSize: isMobile ? '12px' : '14px',
        fontWeight: '500'
      },
      controls: {
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '8px' : '12px',
        flexWrap: 'wrap'
      },
      uploadButton: {
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        color: 'white',
        padding: isMobile ? '8px 12px' : '12px 20px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        border: 'none',
        cursor: 'pointer',
        fontSize: isMobile ? '12px' : '14px',
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
        padding: isMobile ? '16px' : '32px',
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
        padding: isMobile ? '12px' : '16px',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: isMobile ? '48px' : '56px',
        height: isMobile ? '48px' : '56px'
      },
      leftNavButton: {
        left: isMobile ? '8px' : '16px'
      },
      rightNavButton: {
        right: isMobile ? '8px' : '16px'
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
        width: isMobile ? '280px' : '384px',
        height: isMobile ? '350px' : '500px',
        position: 'relative',
        background: '#ffffff',
        overflow: 'hidden'
      },
      spine: {
        width: '16px',
        background: 'linear-gradient(90deg, #92400e 0%, #78350f 100%)',
        boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
          padding: newIsMobile ? '12px' : '20px'
        },
        page: {
          ...prevStyles.page,
          width: newIsMobile ? '280px' : '384px',
          height: newIsMobile ? '350px' : '500px'
        }
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted]);

  const totalPages = useMemo(() => pages.length || samplePages.length, [pages, samplePages]);
  const totalSpreads = useMemo(() => Math.ceil(totalPages / 2), [totalPages]);
  const currentPages = pages.length > 0 ? pages : samplePages;

  useEffect(() => {
    if (pages.length === 0) {
      setPages(samplePages);
    }
  }, [samplePages, pages.length]);

  useEffect(() => {
    if (!isMounted) return;
    
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        previousSpread();
      } else if (e.key === 'ArrowRight') {
        nextSpread();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSpread, isFlipping, isMounted]);

  const nextSpread = useCallback(() => {
    if (currentSpread < totalSpreads - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('forward');
      setTimeout(() => {
        setCurrentSpread(prev => prev + 1);
        setTimeout(() => {
          setIsFlipping(false);
          setFlipDirection('');
        }, 100);
      }, 300);
    }
  }, [currentSpread, isFlipping, totalSpreads]);

  const previousSpread = useCallback(() => {
    if (currentSpread > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('backward');
      setTimeout(() => {
        setCurrentSpread(prev => prev - 1);
        setTimeout(() => {
          setIsFlipping(false);
          setFlipDirection('');
        }, 100);
      }, 300);
    }
  }, [currentSpread, isFlipping]);

  // Enhanced file upload handler with better PDF page generation
  const handleFileUpload = async (file) => {
    if (!file || file.type !== 'application/pdf') {
      alert('Please select a valid PDF file');
      return;
    }

    setIsUploading(true);
    
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Generate multiple pages for the PDF to demonstrate pagination
        const pageCount = Math.floor(Math.random() * 10) + 6; // Random 6-15 pages
        const newPages = [];
        
        // Cover page
        newPages.push({
          id: 0,
          content: (
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white'
            }}>
              <FileText size={64} style={{ marginBottom: '16px' }} />
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px', textAlign: 'center' }}>
                {file.name}
              </h2>
              <p style={{ fontSize: '14px', opacity: '0.8' }}>
                PDF Document Loaded
              </p>
              <p style={{ fontSize: '12px', marginTop: '16px', opacity: '0.7' }}>
                Size: {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
              <p style={{ fontSize: '12px', marginTop: '8px', opacity: '0.7' }}>
                Pages: {pageCount}
              </p>
            </div>
          )
        });

        // Generate content pages
        for (let i = 1; i < pageCount; i++) {
          newPages.push({
            id: i,
            content: (
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'white', 
                padding: '32px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  borderBottom: '2px solid #065f46',
                  paddingBottom: '16px',
                  marginBottom: '24px'
                }}>
                  <h2 style={{ 
                    fontSize: '28px', 
                    fontWeight: '600', 
                    color: '#065f46', 
                    margin: '0'
                  }}>
                    Page {i + 1}
                  </h2>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#6b7280', 
                    margin: '8px 0 0 0' 
                  }}>
                    {file.name}
                  </p>
                </div>
                
                <div style={{ color: '#374151', lineHeight: '1.6', flex: 1 }}>
                  {i === 1 ? (
                    <>
                      <p style={{ marginBottom: '16px' }}>
                        Your PDF has been successfully loaded into the FlipBook viewer.
                      </p>
                      <div style={{
                        background: '#d1fae5',
                        border: '1px solid #10b981',
                        borderRadius: '8px',
                        padding: '16px',
                        marginBottom: '16px'
                      }}>
                        <p style={{ color: '#065f46', fontWeight: '500', margin: 0 }}>
                          ✅ File uploaded successfully
                        </p>
                      </div>
                      <p style={{ fontSize: '14px', color: '#6b7280' }}>
                        In a production environment, this would use PDF.js to render actual PDF content. 
                        Each page would display the real PDF content with proper text extraction and rendering.
                      </p>
                    </>
                  ) : (
                    <>
                      <p style={{ marginBottom: '16px' }}>
                        This is page {i + 1} of your uploaded PDF document. In a real implementation, 
                        this would contain the actual content from your PDF file.
                      </p>
                      
                      <div style={{
                        background: '#f3f4f6',
                        borderRadius: '8px',
                        padding: '16px',
                        marginBottom: '16px',
                        border: '1px solid #d1d5db'
                      }}>
                        <h3 style={{ 
                          fontSize: '18px', 
                          fontWeight: '500', 
                          color: '#374151',
                          margin: '0 0 8px 0'
                        }}>
                          Sample Content Section
                        </h3>
                        <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>

                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 'auto',
                        paddingTop: '16px',
                        borderTop: '1px solid #e5e7eb'
                      }}>
                        <span style={{ fontSize: '12px', color: '#9ca3af' }}>
                          Document: {file.name}
                        </span>
                        <span style={{ fontSize: '12px', color: '#9ca3af' }}>
                          Page {i + 1} of {pageCount}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )
          });
        }
        
        setPages(newPages);
        setPdfFile(file);
        setCurrentSpread(0);
        setIsUploading(false);
      };
      
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error processing file:', error);
      alert('Error processing the PDF file');
      setIsUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
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

  // Download functionality
  const handleDownload = () => {
    if (pdfFile) {
      const url = URL.createObjectURL(pdfFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = pdfFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      const content = `FlipBook Pro - Demo Content\n\nThis is a sample document created by FlipBook Pro.\n\nFeatures:\n- Interactive page flipping\n- PDF upload support\n- Mobile responsive design\n- Zoom controls\n- Download functionality`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'flipbook-demo.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const zoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2));
  const zoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const resetZoom = () => setZoom(1);

  const getCurrentPages = () => {
    const leftPageIndex = currentSpread * 2;
    const rightPageIndex = leftPageIndex + 1;
    
    return {
      leftPage: currentPages[leftPageIndex] || null,
      rightPage: rightPageIndex < currentPages.length ? currentPages[rightPageIndex] : null
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

  return (
    <div 
      style={styles.container}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
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
          <button
            onClick={() => fileInputRef.current?.click()}
            style={{
              ...styles.uploadButton,
              opacity: isUploading ? 0.7 : 1,
              cursor: isUploading ? 'not-allowed' : 'pointer'
            }}
            disabled={isUploading}
            onMouseEnter={(e) => {
              if (!isUploading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px 0 rgba(59, 130, 246, 0.45)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isUploading) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px 0 rgba(59, 130, 246, 0.35)';
              }
            }}
          >
            <Upload size={16} />
            <span>{isUploading ? 'Uploading...' : 'Upload PDF'}</span>
          </button>

          <button
            onClick={handleDownload}
            style={{
              ...styles.uploadButton,
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              boxShadow: '0 4px 15px 0 rgba(5, 150, 105, 0.35)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px 0 rgba(5, 150, 105, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px 0 rgba(5, 150, 105, 0.35)';
            }}
          >
            <Download size={16} />
            <span>Download</span>
          </button>
          
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
              <div style={styles.page}>
                {leftPage && leftPage.content}
              </div>
              
              {/* Book Spine */}
              <div style={styles.spine}>
                <div style={styles.spineDetail}></div>
              </div>
              
              {/* Right Page */}
              <div style={styles.page}>
                {rightPage && rightPage.content}
              </div>
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
                    e.target.style.background = '#fed7aa'
                      }
                }}
              />
            ))}
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
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFileUpload(e.target.files[0]);
                      }
        }}
        className="hidden"
      />

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