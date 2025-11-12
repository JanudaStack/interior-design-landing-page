import React from "react";

const Hero = () => {
    return (
        <section className="hero-section absolute top-0">
            <div className="hero-wrapper">
                <picture className="">
                    <source srcset="/assets/hero-img.jpg" media="(min-width: 1024px)"  />
                    <source srcset="/assets/hero-img-tablet.jpg" media="(min-width: 768px)"/>
                    <img
                        className="hero-img w-screen h-svh"
                        src="/assets/hero-img-mobile.jpg"
                        alt="Interior design hero"
                    />
                </picture>

                <div className="hero-text">
                    <h2 className="hero-heading">Timeless Tailored Spaces</h2>
                    <div className="hero-heading-tablet">
                        <span className="line-1">Timeless</span> <br />
                        <span className="line-2">Tailored</span> <br />
                        <span className="line-3">Spaces</span>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
