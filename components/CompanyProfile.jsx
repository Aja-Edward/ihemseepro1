'use client'

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, ZoomIn, ZoomOut, Upload } from 'lucide-react';

const FlipBook = () => {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('');
  const [zoom, setZoom] = useState(1);
  const [pdfFile, setPdfFile] = useState(null);
  const [pages, setPages] = useState([]);
  const fileInputRef = useRef(null);

  // Sample pages for demonstration - creating more pages for better demo

  const samplePages = useMemo(() => [
    // Cover page
    {
      id: 0,
      content: (
        <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-700 p-8 flex flex-col justify-center items-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">FlipBook Pro</h1>
            <p className="text-xl mb-8 opacity-90">Next.js Interactive Magazine</p>
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl">📖</span>
            </div>
            <p className="text-sm opacity-75">Experience realistic page flipping</p>
          </div>
        </div>
      )
    },
    // Page 1
    {
      id: 1,
      content: (
        <div className="w-full h-full bg-white p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Table of Contents</h1>
          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between border-b border-dotted border-gray-300 pb-2">
              <span className="text-lg">Getting Started</span>
              <span className="text-lg font-mono">02</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-gray-300 pb-2">
              <span className="text-lg">Features & Benefits</span>
              <span className="text-lg font-mono">04</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-gray-300 pb-2">
              <span className="text-lg">Interactive Elements</span>
              <span className="text-lg font-mono">06</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-gray-300 pb-2">
              <span className="text-lg">Customization Guide</span>
              <span className="text-lg font-mono">08</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-gray-300 pb-2">
              <span className="text-lg">Upload Your Content</span>
              <span className="text-lg font-mono">10</span>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 text-sm text-gray-500">Page 1</div>
        </div>
      )
    },
    // Page 2
    {
      id: 2,
      content: (
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Getting Started</h2>
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Welcome to the most advanced flipbook component built with Next.js and React. 
              This component provides a realistic book reading experience with smooth page transitions.
            </p>
            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 mb-2">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1 text-blue-700">
                <li>Realistic 3D page flipping animations</li>
                <li>Two-page spread layout like real books</li>
                <li>Smooth transitions with proper timing</li>
                <li>Mobile-responsive design</li>
              </ul>
            </div>
            <div className="flex justify-center mt-8">
              <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center">
                <span className="text-3xl">🚀</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 text-sm text-gray-500">Page 2</div>
        </div>
      )
    },
    // Page 3
    {
      id: 3,
      content: (
        <div className="w-full h-full bg-white p-8">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Interactive Navigation</h2>
          <div className="space-y-6 text-gray-700">
            <p className="text-lg">
              Experience multiple ways to navigate through your content:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">⌨️ Keyboard Controls</h3>
                <p className="text-sm text-green-700">Use left and right arrow keys for quick navigation</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">👆 Click Navigation</h3>
                <p className="text-sm text-green-700">Click on page edges or use navigation buttons</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">📱 Touch Support</h3>
                <p className="text-sm text-green-700">Swipe gestures for mobile devices</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">🔍 Zoom Controls</h3>
                <p className="text-sm text-green-700">Zoom in/out for detailed viewing</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 text-sm text-gray-500">Page 3</div>
        </div>
      )
    },
    // Page 4
    {
      id: 4,
      content: (
        <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 p-8">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Visual Excellence</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Every detail is crafted for the perfect reading experience with realistic shadows, 
              smooth animations, and professional typography.
            </p>
            <div className="flex justify-center space-x-8 my-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-200 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">✨</span>
                </div>
                <p className="text-sm text-purple-700">Smooth</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-200 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">🎨</span>
                </div>
                <p className="text-sm text-purple-700">Beautiful</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-200 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">⚡</span>
                </div>
                <p className="text-sm text-purple-700">Fast</p>
              </div>
            </div>
            <div className="bg-purple-100 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 text-center italic">
                The most realistic digital reading experience I have ever seen!
              </p>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 text-sm text-gray-500">Page 4</div>
        </div>
      )
    },
    // Page 5
    {
      id: 5,
      content: (
        <div className="w-full h-full bg-white p-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-6">Upload Your Content</h2>
          <div className="space-y-6 text-gray-700">
            <p className="text-lg">
              Transform your PDFs into interactive flipbooks with just one click.
            </p>
            <div className="flex justify-center">
              <div className="bg-orange-50 border-2 border-dashed border-orange-300 rounded-xl p-8 text-center max-w-md">
                <Upload size={48} className="text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-orange-800 mb-2">Drag & Drop PDF</h3>
                <p className="text-orange-600 mb-4">or click to browse files</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
                  Choose File
                </button>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> Full PDF support requires PDF.js integration. 
                This demo shows the flipbook functionality with sample content.
              </p>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 text-sm text-gray-500">Page 5</div>
        </div>
      )
    },
    // Back cover
    {
      id: 6,
      content: (
        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 p-8 flex flex-col justify-center items-center text-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Thank You</h2>
            <p className="text-xl mb-8 opacity-90">for exploring FlipBook Pro</p>
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🎉</span>
            </div>
            <p className="text-sm opacity-75 max-w-md">
              Ready to create your own interactive flipbooks? 
              Start building amazing digital experiences today!
            </p>
          </div>
        </div>
      )
    }
  ], []);

 const totalPages = useMemo(() => samplePages.length, [samplePages]);
 const totalSpreads = useMemo(() => Math.ceil(totalPages / 2), [totalPages]);

  useEffect(() => {
  setPages(samplePages);
}, [samplePages]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        previousSpread();
      } else if (e.key === 'ArrowRight') {
        nextSpread();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSpread, isFlipping]);

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
    }, 800);
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
    }, 800);
  }
}, [currentSpread, isFlipping]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      alert('PDF upload feature would be implemented with PDF.js library in a real application');
    }
  };

  const zoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2));
  const zoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const resetZoom = () => setZoom(1);

  const getCurrentPages = () => {
    const leftPageIndex = currentSpread * 2;
    const rightPageIndex = leftPageIndex + 1;
    
    return {
      leftPage: pages[leftPageIndex] || null,
      rightPage: rightPageIndex < pages.length ? pages[rightPageIndex] : null
    };
  };

  const getFlippingPages = () => {
    if (flipDirection === 'forward') {
      const nextLeftIndex = (currentSpread + 1) * 2;
      const nextRightIndex = nextLeftIndex + 1;
      return {
        leftPage: pages[nextLeftIndex] || null,
        rightPage: nextRightIndex < pages.length ? pages[nextRightIndex] : null
      };
    } else if (flipDirection === 'backward') {
      const prevLeftIndex = (currentSpread - 1) * 2;
      const prevRightIndex = prevLeftIndex + 1;
      return {
        leftPage: pages[prevLeftIndex] || null,
        rightPage: prevRightIndex < pages.length ? pages[prevRightIndex] : null
      };
    }
    return { leftPage: null, rightPage: null };
  };

  const { leftPage, rightPage } = getCurrentPages();
  const { leftPage: flippingLeftPage, rightPage: flippingRightPage } = getFlippingPages();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col">
      {/* Toolbar */}
      <div className="bg-white shadow-lg p-4 flex items-center justify-between border-b">
        <div className="flex items-center space-x-4">
          <h1 className="text-gray-800 text-xl font-bold">FlipBook Pro</h1>
          <span className="text-gray-600">
            Spread {currentSpread + 1} of {totalSpreads}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Upload size={16} />
            <span>Upload PDF</span>
          </button>
          
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={zoomOut}
              className="p-2 text-gray-700 hover:bg-white rounded transition-colors"
              disabled={zoom <= 0.5}
            >
              <ZoomOut size={16} />
            </button>
            <span className="text-gray-700 px-2 text-sm">{Math.round(zoom * 100)}%</span>
            <button
              onClick={zoomIn}
              className="p-2 text-gray-700 hover:bg-white rounded transition-colors"
              disabled={zoom >= 2}
            >
              <ZoomIn size={16} />
            </button>
            <button
              onClick={resetZoom}
              className="p-2 text-gray-700 hover:bg-white rounded transition-colors"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* FlipBook Container */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={previousSpread}
            disabled={currentSpread === 0 || isFlipping}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>

          <button
            onClick={nextSpread}
            disabled={currentSpread === totalSpreads - 1 || isFlipping}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* Book Container */}
          <div 
            className="relative"
            style={{ transform: `scale(${zoom})` }}
          >
            <div className="relative flex" style={{ perspective: '2000px' }}>
              {/* Book Base */}
              <div className="flex bg-amber-900 rounded-lg shadow-2xl overflow-hidden">
                {/* Left Page */}
                <div className="w-80 h-96 md:w-96 md:h-[500px] relative bg-white">
                  {leftPage && leftPage.content}
                </div>
                
                {/* Book Spine */}
                <div className="w-4 bg-gradient-to-r from-amber-800 to-amber-700 shadow-inner">
                  <div className="h-full flex items-center justify-center">
                    <div className="w-0.5 h-3/4 bg-amber-600 rounded"></div>
                  </div>
                </div>
                
                {/* Right Page */}
                <div className="w-80 h-96 md:w-96 md:h-[500px] relative bg-white">
                  {rightPage && rightPage.content}
                </div>
              </div>

              {/* Flipping Page Animation */}
              {isFlipping && (
                <div 
                  className="absolute top-0 flex"
                  style={{
                    transformStyle: 'preserve-3d',
                    animation: flipDirection === 'forward' 
                      ? 'flipForward 0.8s ease-in-out' 
                      : 'flipBackward 0.8s ease-in-out',
                    zIndex: 20
                  }}
                >
                  <div className="w-80 h-96 md:w-96 md:h-[500px] bg-white shadow-2xl rounded-l-lg">
                    {flipDirection === 'forward' && leftPage && leftPage.content}
                    {flipDirection === 'backward' && flippingLeftPage && flippingLeftPage.content}
                  </div>
                  <div className="w-4 bg-gradient-to-r from-amber-800 to-amber-700"></div>
                  <div className="w-80 h-96 md:w-96 md:h-[500px] bg-white shadow-2xl rounded-r-lg">
                    {flipDirection === 'forward' && rightPage && rightPage.content}
                    {flipDirection === 'backward' && flippingRightPage && flippingRightPage.content}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Page Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSpreads }, (_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isFlipping && index !== currentSpread) {
                    setCurrentSpread(index);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSpread 
                    ? 'bg-amber-600 scale-125' 
                    : 'bg-amber-300 hover:bg-amber-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-white border-t p-4 text-center">
        <p className="text-gray-600 text-sm">
          Use arrow keys, click navigation buttons, or tap page indicators • Experience realistic page flipping
        </p>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        onChange={handleFileUpload}
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