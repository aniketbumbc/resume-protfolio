import React from 'react';
import { useState, useEffect } from 'react';
import { jobArray, nameArray } from '../../constant';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import userImage from '../../assets/images/Final-Aniket-Photo.png';
import { Slide } from 'react-awesome-reveal';

import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="home-page">
          {' '}
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={25}
              />
            </h1>

            <h2>Fullstack Developer / Javascript Developer</h2>
            <Slide>
              <a
                className="flat-button"
                href="../../assets/Resume/Aniket_Bhavsar.pdf"
                download="Aniket_Bhavsar.pdf"
              >
                Resume
              </a>
            </Slide>
          </div>
        </div>
        <Loader type="pacman" />
        <div className="image-section">
          <div className="image-box">
            <img className="image-blob" src={userImage} alt="aniket-b" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
