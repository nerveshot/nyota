import React, { useRef, useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Eye } from 'lucide-react';

export default function ScratchCard({
  children,
  onRevealed,
  threshold = 0.40,
  brushSize = 28,
  title = "SCRATCH TO REVEAL THE DATE",
  subtitle = "Use your finger or mouse to unveil the sacred celebration date"
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const [scratchedPercent, setScratchedPercent] = useState(0);
  const lastPointRef = useRef(null);

  // Initialize and draw the luxury gold foil cover
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || isRevealed) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    if (width === 0 || height === 0) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // 1. Draw Metallic Gold & Velvet Gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#D4AF37');
    gradient.addColorStop(0.2, '#F5E6CC');
    gradient.addColorStop(0.45, '#AA7C11');
    gradient.addColorStop(0.7, '#D4AF37');
    gradient.addColorStop(0.85, '#855E0E');
    gradient.addColorStop(1, '#C59B27');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // 2. Draw Subtle Islamic Star / Diamond Lattice Texture
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
    ctx.lineWidth = 1;
    const step = 28;
    for (let x = 0; x < width; x += step) {
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(x + step / 2, y);
        ctx.lineTo(x + step, y + step / 2);
        ctx.lineTo(x + step / 2, y + step);
        ctx.lineTo(x, y + step / 2);
        ctx.closePath();
        ctx.stroke();
      }
    }
    ctx.restore();

    // 3. Draw Glitter Specks
    ctx.save();
    for (let i = 0; i < 45; i++) {
      const rx = (Math.sin(i * 99) * 0.5 + 0.5) * width;
      const ry = (Math.cos(i * 33) * 0.5 + 0.5) * height;
      ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 255, 255, 0.65)' : 'rgba(255, 220, 130, 0.8)';
      ctx.beginPath();
      ctx.arc(rx, ry, (i % 3) + 1, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 4. Gold Border Trim on the canvas
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 235, 160, 0.8)';
    ctx.lineWidth = 3;
    ctx.strokeRect(6, 6, width - 12, height - 12);
    ctx.strokeStyle = 'rgba(100, 70, 10, 0.4)';
    ctx.lineWidth = 1;
    ctx.strokeRect(10, 10, width - 20, height - 20);
    ctx.restore();

    // 5. Draw Luxury Typography & Scratch Coin Icon Stamped on Foil
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const centerY = height / 2;

    // Coin icon circle
    ctx.beginPath();
    ctx.arc(width / 2, centerY - 28, 22, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(26, 8, 14, 0.85)';
    ctx.fill();
    ctx.strokeStyle = '#F5D38B';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Sparkle symbol in circle
    ctx.font = 'bold 18px serif';
    ctx.fillStyle = '#F5D38B';
    ctx.fillText('✦', width / 2, centerY - 27);

    // Title Text
    ctx.font = 'bold 13px "Cinzel", Georgia, serif';
    ctx.fillStyle = '#1A060F';
    ctx.fillText(`✦  ${title}  ✦`, width / 2, centerY + 14);

    // Subtitle Text
    ctx.font = '10px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#3D1B06';
    ctx.fillText(subtitle, width / 2, centerY + 34);

    ctx.restore();
  }, [isRevealed, title, subtitle]);

  useEffect(() => {
    initCanvas();
    window.addEventListener('resize', initCanvas);
    return () => window.removeEventListener('resize', initCanvas);
  }, [initCanvas]);

  // Calculate percentage of foil scratched
  const checkScratchedPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    try {
      const ctx = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width;
      const h = canvas.height;
      // Sample pixels with a step of 16 for fast performance
      const step = Math.max(8, Math.floor(16 * dpr));
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;

      let transparentCount = 0;
      let totalSamples = 0;

      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const index = (y * w + x) * 4 + 3; // alpha channel
          if (data[index] < 128) {
            transparentCount++;
          }
          totalSamples++;
        }
      }

      const percent = transparentCount / totalSamples;
      setScratchedPercent(Math.round(percent * 100));

      if (percent >= threshold) {
        triggerCompleteReveal();
      }
    } catch (e) {
      // In case of any context error, ignore
    }
  };

  const triggerCompleteReveal = () => {
    if (isRevealed) return;
    setIsRevealed(true);
    if (onRevealed) onRevealed();

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.55 },
        colors: ['#D4AF37', '#8B152B', '#0B1B3D', '#FFFFFF', '#F5D38B'],
      });
    } catch (e) {
      console.log(e);
    }
  };

  const scratchAt = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = brushSize * dpr;

    if (lastPointRef.current) {
      ctx.beginPath();
      ctx.moveTo(lastPointRef.current.x * dpr, lastPointRef.current.y * dpr);
      ctx.lineTo(x * dpr, y * dpr);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(x * dpr, y * dpr, (brushSize / 2) * dpr, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
    lastPointRef.current = { x, y };
  };

  const getCanvasCoords = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const handlePointerDown = (e) => {
    if (isRevealed) return;
    setIsScratching(true);
    const { x, y } = getCanvasCoords(e);
    lastPointRef.current = null;
    scratchAt(x, y);
  };

  const handlePointerMove = (e) => {
    if (!isScratching || isRevealed) return;
    if (e.cancelable && e.touches) {
      e.preventDefault(); // Stop scrolling while scratching on touch devices
    }
    const { x, y } = getCanvasCoords(e);
    scratchAt(x, y);
    checkScratchedPercentage();
  };

  const handlePointerUp = () => {
    setIsScratching(false);
    lastPointRef.current = null;
    checkScratchedPercentage();
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto my-6 select-none group">
      
      {/* Top Banner Indicator */}
      <div className="flex items-center justify-between pb-2 px-2 text-xs font-mono">
        <div className="flex items-center gap-1.5 text-amber-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="font-semibold uppercase tracking-wider">
            {isRevealed ? "✦ Sacred Date Revealed" : "✦ Interactive Scratch Card"}
          </span>
        </div>

        {!isRevealed && (
          <button
            type="button"
            onClick={triggerCompleteReveal}
            className="flex items-center gap-1 text-[11px] text-amber-400/90 hover:text-amber-200 underline decoration-amber-400/40 hover:decoration-amber-300 transition-all cursor-pointer font-sans"
          >
            <Eye className="w-3 h-3" />
            <span>Reveal Instantly</span>
          </button>
        )}
      </div>

      {/* Container holding children and overlay canvas */}
      <div 
        ref={containerRef} 
        className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-400/50"
      >
        {/* The revealed content underneath */}
        <div className={`transition-all duration-700 ${isRevealed ? 'opacity-100 scale-100' : 'opacity-90'}`}>
          {children}
        </div>

        {/* Scratchable Canvas Layer */}
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
            className="absolute inset-0 z-20 cursor-pointer touch-none transition-opacity duration-700 shadow-inner"
            style={{ 
              touchAction: 'none',
              filter: 'drop-shadow(0 4px 15px rgba(212,175,55,0.4))'
            }}
          />
        )}
      </div>

      {/* Scratched percentage indicator hint */}
      {!isRevealed && scratchedPercent > 0 && (
        <div className="text-center pt-2 text-[10px] text-amber-300/80 font-mono tracking-wider animate-fadeIn">
          ✦ {scratchedPercent}% Scratched • Almost there! ✦
        </div>
      )}
    </div>
  );
}
