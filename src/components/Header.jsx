import React from "react";

const Header = () => {
  return (
    <header className="relative main-header flex items-center justify-between p-5 z-99">
      <nav className="nav-menu">
        <menu className="desktop-nav hidden lg:flex gap-5">
          <a href="#">Projects</a>
          <a href="#">Services</a>
          <a href="#">Studio</a>
          <a href="#">Insights</a>
        </menu>

        <div className="mobile-nav-container">
          <button className="menu lg:hidden">Menu</button>

          <menu className="mobile-nav hidden">
            <a href="#">Projects</a>
            <a href="#">Services</a>
            <a href="#">Studio</a>
            <a href="#">Insights</a>
          </menu>
        </div>
      </nav>

      <div className="header-logo">
        <a href=""><img src="/logo.png" alt="zenith-logo" className="w-30" /></a>
      </div>

      <button className="contact-us lg:underline hover:no-underline">
        Contact <span className="text-ab hidden lg:inline">US</span>
      </button>
    </header>
  );
};

export default Header;
