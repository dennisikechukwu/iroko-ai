"use client";

import { useEffect, useRef } from "react";

interface WavingDotsBackgroundProps {
  maskMode?: "hero" | "center";
  className?: string;
}

export function WavingDotsBackground({
  maskMode = "hero",
  className = "",
}: WavingDotsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    const mouse = { x: -1000, y: -1000 };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const spacing = 18;
    let time = 0;

    const render = () => {
      time += 0.028;
      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * spacing;
          const baseY = j * spacing;

          // Google Stitch-style traveling wave field across X and Y
          const wave1 = Math.sin(baseX * 0.014 + time * 1.4);
          const wave2 = Math.cos(baseY * 0.016 + time * 1.1);
          const diagonalWave = Math.sin((baseX + baseY) * 0.01 - time * 1.6);
          const combinedWave = (wave1 * wave2 + diagonalWave) * 0.5; // [-1, 1]

          // Subtle physical wave displacement
          let offsetX = Math.cos(baseY * 0.018 + time * 1.3) * 2.8;
          let offsetY = combinedWave * 4.2;

          // Subtle cursor ripple interaction
          const dx = baseX - mouse.x;
          const dy = baseY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let mouseBoost = 0;
          if (dist < 140 && dist > 0) {
            const factor = (1 - dist / 140) ** 2;
            offsetX += (dx / dist) * factor * 6;
            offsetY += (dy / dist) * factor * 6;
            mouseBoost = factor;
          }

          const x = baseX + offsetX;
          const y = baseY + offsetY;

          // Normalized wave crest [0, 1]
          const crest = (combinedWave + 1) * 0.5;
          const radius = 0.95 + crest * 0.75 + mouseBoost * 0.8;

          // Blend smoothly from soft zinc dot to Attio blue at wave peaks
          if (crest > 0.76 || mouseBoost > 0.25) {
            const blueAlpha = Math.min(
              0.55,
              (crest - 0.5) * 0.65 + mouseBoost * 0.45
            );
            ctx.fillStyle = `rgba(59, 130, 246, ${blueAlpha.toFixed(3)})`;
          } else {
            const grayAlpha = 0.22 + crest * 0.38;
            ctx.fillStyle = `rgba(161, 161, 170, ${grayAlpha.toFixed(3)})`;
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const maskClass =
    maskMode === "center"
      ? "[mask-image:radial-gradient(ellipse_48%_56%_at_50%_50%,transparent_48%,#000_100%)]"
      : "[mask-image:radial-gradient(ellipse_52%_38%_at_50%_23%,transparent_20%,#000_100%)]";

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 ${maskClass} ${className}`}
    />
  );
}
