import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const Navigation = () => {

  const navMenuRef = useRef();

  const navBtnRef = useRef();

  const mobileBreakpoint = 700;

  let [navOpened, setNavOpened] = useState(false);

  const handleToggleNav = () => {
    setNavOpened(navOpened => !navOpened);
  }

  useEffect(() => {
    document.addEventListener("click", function (event) {

      if (window.innerWidth > mobileBreakpoint) {
        return;
      }
      // If user clicks inside the element, do nothing
      if (event.target.closest(".nav")) {
        return;
      }
      setNavOpened(false);
    })
  }, []);

  

  return <nav className="nav">
  <div className="nav__topRow">
    <div className="pageBound">
      <div className="nav__innerWrapper">
        <Logo/>
        <button className="nav__menuBtn" ref={navBtnRef} onClick={handleToggleNav}>
          <i className="fa-solid fa-bars"></i>
        </button>
        {/*<button class="btn btn--green"><i class="fa-brands fa-github btn__icon"></i>View on github</button>*/}
      </div>
    </div>
  </div>
  <div className="nav__bottomRow" ref={navMenuRef} style={{display: navOpened ? "block": "none"}}>
    <div className="pageBound">
      <div className="nav__innerWrapper">
        <ul className="nav__list">
          <li className="nav__item">Projects</li>
          <li className="nav__item">News</li>
          <li className="nav__item">Downloads</li>
          <li className="nav__item">Tutorials</li>
          <li className="nav__item">Forums</li>
          <li className="nav__item">
            <a href="https://github.com/MrWebMD/mrwebmdblog" rel="noreferrer" target="_blank">
              <i className="fa-brands fa-github nav__icon"></i>Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
}

export default Navigation;