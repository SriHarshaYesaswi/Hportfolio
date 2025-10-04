import { useEffect, useRef } from 'react';

// Custom SVG cursor that follows the mouse. Uses CSS variable --cursor-color for the fill
// so it matches the site theme. The SVG is intentionally simple and performant.
export default function CustomCursor({ color = 'var(--cursor-color)', size = 36 }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Hide native cursor
    document.documentElement.style.cursor = 'none';

    function onMove(e) {
      const x = e.clientX;
      const y = e.clientY;
      // Offset so the tip of the arrow points to the pointer (approx values)
      const offsetX = -6; // adjust to align the SVG tip
      const offsetY = -2;
      svg.style.transform = `translate3d(${x + offsetX}px, ${y + offsetY}px, 0)`;
    }

    function onHover(e) {
      const target = e.target;
      if (target.closest && target.closest('a, button, input, textarea, .cursor-large, .cursor-pointer')) {
        svg.style.scale = '1.3';
        svg.style.opacity = '1';
      } else {
        svg.style.scale = '1';
        svg.style.opacity = '0.98';
      }
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onHover);

    return () => {
      document.documentElement.style.cursor = '';
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
