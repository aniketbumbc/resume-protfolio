import React from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { aboutMe } from '../../constant';
import { Reveal, Fade, Zoom } from 'react-awesome-reveal';

import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="about-container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={aboutMe}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <Reveal>
            <p className="about-info">
              I love to do{' '}
              <span className="secondary-color">
                marathon🏃‍♂️, acquiring new skills 👨‍💻, swim in the open water 🏊‍♂️,
                strong believe in the meditation🧘🏻,{' '}
              </span>{' '}
              and amateur musician who{' '}
              <span className="secondary-color">plays guitar🎸</span>. Fond of
              traveling and observing different cultures and understanding
              humans. Spreading more{' '}
              <span className="secondary-color">
                {' '}
                empathy and solving humans problem{' '}
              </span>{' '}
              with the assistance of technology.
            </p>
          </Reveal>
          <Fade>
            <p className="about-info">
              I graduated with{' '}
              <span className="secondary-color">
                Masters of Science in Information Systems from the USA 🇺🇸.
              </span>{' '}
              I am currently working in the IT industry for more than 5 years of
              experiences as the
              <span className="secondary-color">
                {' '}
                Front-End (UI/UX) - JavaScript Developer.{' '}
              </span>{' '}
              along with good understanding of{' '}
              <span className="secondary-color">UX-UI 🎨</span> designing
              principles.
            </p>
          </Fade>
          <Zoom>
            <p className="about-info">
              Looking forward to an opportunity to work with cutting-edge
              technologies on the challenge and diverse projects. I'm quietly
              <span className="secondary-color">
                {' '}
                confident, naturally curious, good learner,{' '}
              </span>{' '}
              and perpetually working on improving my chops one design problem
              at a time.
            </p>
          </Zoom>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />

      <div className="aboutme-container">
        <div>
          <span className="title-skill">Development</span>
          <p className="details-info">
            I'm passionate about building and developing software products. I
            specialize in development and design products from ideation to
            launch.
          </p>
        </div>

        <div>
          <span className="title-skill">Leadership</span>
          <p className="details-info">
            I firmly believe that great leaders always work for the people.
            leadership is all about showing up for people and inspiring growth,
            regardless of what position you’re in or how much power you hold.
          </p>
        </div>

        <div>
          <span className="title-skill">Product Management</span>
          <p className="details-info">
            I'm a certified product management foundations course from REFORGE .
            Looking forward to different courses from same university. Along
            with hefty work experience in agile processes and methodologies to
            my design process.
          </p>
        </div>
      </div>

      <div className="aboutme-container">
        <div>
          <span className="title-skill">UI & UX Design</span>
          <p className="details-info">
            I'm a skilled visual designer with an eye for graphics, typography,{' '}
            layout, and color. I love designing of websites <br /> and mobile{' '}
            products with infusing modern aesthetics.
          </p>
        </div>
        <div>
          <span className="title-skill"> User Research</span>
          <p className="details-info">
            One of the most important step of the design process. I love
            speaking to users and understanding their process & problems first,
            before even considering design.
          </p>
        </div>
        <div>
          <span className="title-skill">Prototyping - User flow</span>
          <p className="details-info">
            I'm skilled in prototyping products with users and stakeholders
            across the entire design lifecycle. I love using Figma, Sketch,
            webflow & invision to wireframe and design process.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
