import React from 'react';
import Typed from 'typed.js'
import PROFILE from "../assets/images/diki.jpg"

const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Diki Armanda.', 'Fullstack Developer.', 'Lecturer.', 'Graphic Designer.'],
      typeSpeed: 100,
      loop: true,
      shuffle: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="hero h-screen text-center bg-base-200" id="hero">
      <div className="hero-content flex-col w-full lg:justify-around lg:flex-row-reverse">
        <div>
          <img src={PROFILE} className="w-56 md:w-96 mask mask-hexagon shadow-2xl" />
        </div>
        <div className="lg:text-start">
          <p className="text-lg md:text-2xl font-semibold">Hello there! I&apos;m</p>
          <h1 className="text-3xl md:text-5xl font-bold">
            <span ref={el}></span>
          </h1>
          <p className="pt-3 pb-6">
            &quot;Believe you can and you&apos;re halfway there. - Theodore Roosevelt&quot;
          </p>
          <a href="#contact" className="btn btn-secondary">Hire Me</a>
        </div>
      </div>
    </div>
  )
}

export default Hero