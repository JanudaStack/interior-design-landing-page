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
            </div>
        </section>
    );
};

export default Hero;
