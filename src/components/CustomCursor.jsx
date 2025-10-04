import { useEffect, useRef } from 'react';

// Custom SVG cursor that follows the mouse. Uses CSS variable --cursor-color for the fill
// so it matches the site theme. The SVG is intentionally simple and performant.
export default function CustomCursor({ color = 'var(--cursor-color)', size = 36 }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    // Activate cursor only when inside the app root to avoid overriding system cursor globally.
    const rootEl = document.getElementById('root') || document.body;
    let isInside = false;

    function onMove(e) {
      if (!isInside) return;
      const x = e.clientX;
      const y = e.clientY;
      // Offset so the tip of the arrow points to the pointer (approx values)
      const offsetX = -6; // adjust to align the SVG tip
      const offsetY = -2;
      svg.style.transform = `translate3d(${x + offsetX}px, ${y + offsetY}px, 0)`;
    }

    function onHover(e) {
      if (!isInside) return;
      const target = e.target;
      if (target.closest && target.closest('a, button, input, textarea, .cursor-large, .cursor-pointer')) {
        svg.style.scale = '1.3';
        svg.style.opacity = '1';
      } else {
        svg.style.scale = '1';
        svg.style.opacity = '0.98';
      }
    }

    function onEnter() {
      isInside = true;
      // hide native cursor only when inside
      document.documentElement.style.cursor = 'none';
      svg.style.display = 'block';
    }

    function onLeave() {
      isInside = false;
      document.documentElement.style.cursor = '';
      // move svg offscreen to avoid showing outside site
      svg.style.transform = 'translate3d(-9999px, -9999px, 0)';
      svg.style.display = 'none';
    }

    // start hidden
    svg.style.display = 'none';

    rootEl.addEventListener('mouseenter', onEnter);
    rootEl.addEventListener('mouseleave', onLeave);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onHover);

    return () => {
      document.documentElement.style.cursor = '';
      rootEl.removeEventListener('mouseenter', onEnter);
      rootEl.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onHover);
    };
  }, [size]);

  // Inline SVG: stylized arrow cursor. Fill uses CSS variable so website color can control it.
  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate3d(-9999px, -9999px, 0)',
        transition: 'transform 80ms linear, scale 120ms ease, opacity 120ms ease',
        opacity: 0.98,
        willChange: 'transform',
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="#000" floodOpacity="0.45" />
        </filter>
      </defs>
      {/* Outer stroke */}
      <path
        d="M4 2 L60 34 L36 36 L20 60 L12 52 L12 4 Z"
        fill="#1f1f1f"
        filter="url(#shadow)"
      />
      {/* Inner colored area - uses CSS variable for color */}
      <path d="M12 10 L52 38 L34 38 L20 56 L20 14 Z" fill={color} />
      {/* Accent stripe */}
      <path d="M18 24 L46 44 L42 48 L14 28 Z" fill="#9fe0ff" opacity="0.95" />
      {/* Small white divider */}
      <path d="M16 22 L48 42 L46 44 L14 24 Z" fill="#ffffff" opacity="0.9" />
    </svg>
  );
}
export default function CustomCursor({
  dotColor = 'var(--cursor-color)',
  ringColor = 'rgba(145,94,255,0.18)',
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

    // Hide native cursor globally (user requested no native pointer visible)
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
        // reset - small scale handled by raf loop
        dot.style.transform = `translate3d(${mouseX - dotSize / 2}px, ${mouseY - dotSize / 2}px, 0) scale(1)`;
        ring.style.transform = `translate3d(${mouseX - ringSize / 2}px, ${mouseY - ringSize / 2}px, 0) scale(1)`;
        ring.style.borderColor = 'rgba(255,255,255,0.06)';
      }
    }

    function loop() {
      // ease ring towards mouse
      const ease = 0.18;
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * ease;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * ease;

      // apply transforms
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

  // Render dot and ring elements
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
          zIndex: 9999,
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
