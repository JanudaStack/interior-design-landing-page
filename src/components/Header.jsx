import React from "react";

const Header = () => {
  return (
    <header className="main-header flex justify-between p-5">
      <div className="logo">
        <img src="/logo.png" alt="" className="w-10" />
      </div>

      <nav className="nav-menu hidden gap-8 justify-center  lg:flex">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">Blog</a>
      </nav>

      <button className="cta-btn bg-black rounded-4xl text-white px-3 hidden md:block">
        Get Free Consultation
      </button>

      <button className="menu-btn md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 50 50"
        >
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
        </svg>
      </button>
    </header>
  );
};

export default Header;
