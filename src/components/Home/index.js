import React from 'react';
import { useState, useEffect } from 'react';
import { jobTitleArray, nameTitleArray } from '../../constant';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { Slide } from 'react-awesome-reveal';
import userImage from '../../assets/images/developer-program.gif';

import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  console.log();

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
                strArray={nameTitleArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobTitleArray}
                idx={25}
              />
            </h1>
            <h2 className="title-description">
              Javascript Fullstack Developer / UX-UI Designer
            </h2>
            <Slide>
              {/* <a
                className="flat-button"
                href={process.env.PUBLIC_URL + '/Aniket_Bhavsar.pdf'}
                download="Aniket_Bhavsar.pdf"
              >
                Resume
              </a> */}
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
