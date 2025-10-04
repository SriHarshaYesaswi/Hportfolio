import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// initialize firebase
import "./firebase";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// --- Click follower setup -------------------------------------------------
// Create the follower element and attach click/touch listeners to body.
(function setupFollower() {
  try {
    const existing = document.getElementById('follower');
    if (existing) return;

    const follower = document.createElement('div');
    follower.id = 'follower';
    document.body.appendChild(follower);

    function placeFollower(x, y) {
      // center the 32x32 element
      const fx = `${x - 16}px`;
      const fy = `${y - 16}px`;
      follower.style.setProperty('--fx', fx);
      follower.style.setProperty('--fy', fy);
      // move and pop
      follower.style.transform = `translate3d(${fx}, ${fy}, 0) scale(1)`;
      // trigger pop class briefly
      follower.classList.remove('follower--pop');
      // force reflow then add
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      follower.offsetWidth;
      follower.classList.add('follower--pop');
      setTimeout(() => follower.classList.remove('follower--pop'), 300);
    }

    document.body.addEventListener('click', (e) => {
      placeFollower(e.clientX, e.clientY);
    });

    document.body.addEventListener('touchstart', (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const t = e.touches[0];
      placeFollower(t.clientX, t.clientY);
    });
  } catch (err) {
    // fail silently in SSR/dev environments
    // eslint-disable-next-line no-console
    console.warn('follower init failed', err);
  }
})();

