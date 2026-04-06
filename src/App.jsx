import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./App.css";

function App() {
  const fullRef = useRef(null);
  const closeRef = useRef(null);
  const headingsRef = useRef([]);
  const tl = useRef(null);

  useEffect(() => {

    tl.current = gsap.timeline({ paused: true });

    tl.current.to(fullRef.current, { right: 0, duration: 0.3 });

    tl.current.fromTo(
      headingsRef.current,
      {
        x: 150,
        opacity: 0,
      },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.2 },
    );

    tl.current.fromTo(
      closeRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 },
    );
  }, []);

  const openMenu = () => {
    tl.current.play(0);
  };

  const closeMenu = () => {
    tl.current.reverse();
  };
  const menuItems = ["Home", "About", "Contact", "Blog", "Services"];

  return (
    <div id="main">
      <div id="nav">
        <h2>Gsap</h2>
        <i className="ri-menu-3-line" onClick={openMenu}></i>
      </div>

      <div id="full" ref={fullRef}>
        {menuItems.map((items, index) => (
          <h4 ref={(el) => (headingsRef.current[index] = el)}>{items}</h4>
        ))}

        <i className="ri-close-line" ref={closeRef} onClick={closeMenu}></i>
      </div>
    </div>
  );
}

export default App;
