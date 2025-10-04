import { useEffect, useRef } from 'react';

export default function CustomCursor({
  dotColor = 'var(--cursor-color, #915eff)',
  ringColor = 'rgba(145,94,255,0.14)',
  dotSize = 8,
  ringSize = 36,
} = {}) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef({ x: -9999, y: -9999 });
  const ringPosRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Hide native cursor globally
    document.documentElement.style.cursor = 'none';

    let mouseX = -9999;
    let mouseY = -9999;

    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      posRef.current.x = mouseX;
      posRef.current.y = mouseY;
    }

    function onHover(e) {
      const target = e.target;
      if (target.closest && target.closest('a, button, input, textarea, .cursor-large, .cursor-pointer')) {
        dot.style.transform = `translate3d(${mouseX - dotSize / 2}px, ${mouseY - dotSize / 2}px, 0) scale(1.3)`;
        ring.style.transform = `translate3d(${mouseX - ringSize / 2}px, ${mouseY - ringSize / 2}px, 0) scale(1.4)`;
        ring.style.borderColor = ringColor;
      } else {
        dot.style.transform = `translate3d(${mouseX - dotSize / 2}px, ${mouseY - dotSize / 2}px, 0) scale(1)`;
        ring.style.transform = `translate3d(${mouseX - ringSize / 2}px, ${mouseY - ringSize / 2}px, 0) scale(1)`;
        ring.style.borderColor = 'rgba(255,255,255,0.06)';
      }
    }

    function loop() {
      const ease = 0.16;
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * ease;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * ease;

      dot.style.transform = `translate3d(${posRef.current.x - dotSize / 2}px, ${posRef.current.y - dotSize / 2}px, 0)`;
      ring.style.transform = `translate3d(${ringPosRef.current.x - ringSize / 2}px, ${ringPosRef.current.y - ringSize / 2}px, 0)`;

      rafRef.current = requestAnimationFrame(loop);
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onHover);

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      document.documentElement.style.cursor = '';
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onHover);
      cancelAnimationFrame(rafRef.current);
    };
  }, [dotSize, ringSize, ringColor]);

  return (
    <>
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          width: ringSize,
          height: ringSize,
          borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.06)',
          transform: 'translate3d(-9999px, -9999px, 0)',
          transition: 'border-color 120ms ease, transform 120ms ease',
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          pointerEvents: 'none',
          zIndex: 10000,
          width: dotSize,
          height: dotSize,
          borderRadius: '50%',
          background: dotColor,
          transform: 'translate3d(-9999px, -9999px, 0)',
          transition: 'transform 80ms linear',
        }}
      />
    </>
  );
}
