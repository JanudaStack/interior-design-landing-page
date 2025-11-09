import React from 'react'

const Header = () => {
  return (
    <header className="main-header">
        <div className="logo">
            <img src="/logo.png" alt="" />
        </div>

        <nav className="nav-menu">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Blog</a>
        </nav>

        <button className="cta-btn">
            Get Free Consultation
        </button>
    </header>
  )
}

export default Header