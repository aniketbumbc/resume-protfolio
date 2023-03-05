import React from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { aboutMe } from '../../constant';
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
          <p className="about-info">
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the cutting
            edage technologies on challenging and diverse projects.
          </p>
          <p className="about-info">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p className="about-info">
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>

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
          <span>Software Design</span>
          <p className="details-info">
            I'm passionate about building and designing software products across
            financial tech, productivity, CRM, and community. I specialize in
            designing SaaS products from ideation to launch.
          </p>
        </div>
        <div>
          <span>Software Design</span>
          <p className="details-info">
            I'm passionate about building and designing software products across
            financial tech, productivity, CRM, and community. I specialize in
            designing SaaS products from ideation to launch.
          </p>
        </div>
        <div>
          <span>Software Design</span>
          <p className="details-info">
            I'm passionate about building and designing software products across
            financial tech, productivity, CRM, and community. I specialize in
            designing products from ideation to launch.
          </p>
        </div>
      </div>

      <div className="aboutme-container">
        <div>
          <span>Software Design</span>
          <p className="details-info">
            I'm passionate about building and designing software products across
            financial tech, productivity, CRM, and community. I specialize in
            designing SaaS products from ideation to launch.
          </p>
        </div>
        <div>
          <span>Software Design</span>
          <p className="details-info">
            I'm passionate about building and designing software products across
            financial tech, productivity, CRM, and community. I specialize in
            designing SaaS products from ideation to launch.
          </p>
        </div>
        <div>
          <span>Software Design</span>
          <p className="details-info">
            I'm passionate about building and designing software products across
            financial tech, productivity, CRM, and community. I specialize in
            designing products from ideation to launch.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
