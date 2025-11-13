import React from "react";


const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-wrapper">
                <picture>
                    <source srcSet="/assets/hero-img.jpg" media="(min-width: 1024px)" />
                    <source srcSet="/assets/hero-img-tablet.jpg" media="(min-width: 768px)" />
                    <img
                        className="hero-img"
                        src="/assets/hero-img-mobile.jpg"
                        alt="Interior design hero"
                    />
                </picture>

                <div className="hero-text" aria-hidden="true">
                    <h1 className="hero-heading">TIMELESS<br/>TAILORED<br/>SPACES</h1>

                    <h1 className="hero-heading-tablet" aria-hidden="true">
                        <span className="line-1">TIMELESS</span>
                        <span className="line-2">TAILORED</span>
                        <span className="line-3">SPACES</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
