import Button from 'react-bootstrap/esm/Button';
import './Pills.css'
import React, { useState, useEffect, useRef } from 'react';
import head from '../../assets/head2.jpg'
import react from '../../assets/react.png'
import angular from '../../assets/angular.png'
import css from '../../assets/css.svg'
import html from '../../assets/html.png'
import js from '../../assets/js.png'
import ts from '../../assets/ts.png'
import Fade from 'react-bootstrap/Fade';


function Pills() {
  const [active, setActive] = useState('one')
  const [open, setOpen] = useState(true);
  const textRef = useRef(null);
  const logosRef = useRef(null);
  const [fade, setFade] = useState(false);


  const textMap = {
    one: ' I am a young software professional with growing track record of delivering high quality software, while also being a dynamic member and leader of high functioning teams. Technical expertise within the Web Development domain with specialized skill in Angular, React, Javascript, HTML, CSS, Node.js, AWS and a firm, foundational understanding of design patterns, cloud computing, and software design.',
    two: 'Backend text here...',
    three: 'CI/CD text here...',
    four: 'Info text here...'
  };
  const images = {
    one: [react, angular, html, css, js, ts],
    two: [ts, js, css, html, js, ts]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textRef.current.classList.add('active');
          logosRef.current.classList.add('active');

        } else {
          textRef.current.classList.remove('active');
          logosRef.current.classList.remove('active');

        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }
    if (logosRef.current) {
      observer.observe(logosRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      if (logosRef.current) {
        observer.unobserve(logosRef.current);
      }
    };
  }, []);
  const handleClick = (newActive) => {
    setFade(false);
    setTimeout(() => {
      setActive(newActive);
      setFade(true);
    }, 300); // Adjust the timeout to match the CSS transition duration
  };


  return (
    <>
      <div className='pill-container'>
        <div className='pills'>
          <Button onClick={() => { setActive('one'); handleClick('one') }} className={`pill${active === 'one' ? " clicked" : " notClicked"}`} >Experience</Button>
          <Button onClick={() => { setActive('two'); handleClick('two') }} className={`pill${active === 'two' ? " clicked" : " notClicked"}`}>Outside of Work</Button>
          <Button onClick={() => setActive('three')} className={`pill${active === 'three' ? " clicked" : " notClicked"}`}>CI/CD</Button>
          <Button onClick={() => setActive('four')} className={`pill${active === 'four' ? " clicked" : " notClicked"}`}>Info</Button>
        </div>
        <Fade in={open}>
          <div id={`example-fade-text-${active}`} className={`example-fade-text-${active} ${fade ? 'active' : ''}`}>
            <div className={`text-box-container-one`}>
              <div className={`text`} ref={textRef}>
                {textMap[active]}
              </div>
              <div className='text-div' ref={logosRef}>
                {images[active].map((image, index) => (
                  <div className="img-markup">
                    <img key={index} className='fixed-size-img' src={image} alt={`img-${index}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default Pills;