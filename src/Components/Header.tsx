import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../stylesheets/Header.module.css";

const Header: React.FC = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const headerDivRef = useRef<HTMLDivElement>(null);

  const handleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(scrollY);
      window.scrollY >= 140
        ? headerDivRef.current?.classList.add("close")
        : headerDivRef.current?.classList.remove("close");
    });
  }, []);

  return (
    <>
      <header className={`${styles.header}`}>
        <div
          ref={headerDivRef}
          className={`${styles.headerDiv} flex-and-align`}
        >
          <div>
            <NavLink to={"/"}>
              <img className={styles.logoImg} src="/logo.png" />
            </NavLink>
          </div>

          <nav className="flex-and-align">
            <NavLink to={"/categories"}>CATEGORIES</NavLink>
            <NavLink to={"/product"}>PRODUCT PAGE</NavLink>
          </nav>

          <div>
            <button style={{ position: "relative" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
              </svg>
              <span data-info="cart-length">1</span>
            </button>

            <button className={`${styles.hamburger}`} onClick={handleMobileNav}>
              {!showMobileNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <path d="M4 6l16 0"></path>
                  <path d="M4 12l16 0"></path>
                  <path d="M4 18l16 0"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="x-mobile"
                >
                  <path d="M18 6l-12 12"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {showMobileNav ? (
        <nav className={styles.mobileNav}>
          <NavLink
            to={"/categories"}
            onClick={() => {
              setShowMobileNav(false);
            }}
          >
            CATEGORIES
          </NavLink>
          <NavLink
            to={"/product"}
            onClick={() => {
              setShowMobileNav(false);
            }}
          >
            PRODUCT PAGE
          </NavLink>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
