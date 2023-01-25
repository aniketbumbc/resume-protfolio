import React from 'react';
import { useState, useEffect } from 'react';
//import { nameArray, skills, techStack, workHistory } from '../../constant';
import './index.scss';
import Loader from 'react-loaders';
import designSketch from '../../assets/images/design-1.jpg';
import ecommerce from '../../assets/images/ecommerce.jpg';
import AnimatedLetters from '../AnimatedLetters';
import { productDesignText, ohvazBreakfast } from '../../constant';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 10000);
  }, []);

  return (
    <>
      <div className="portfolio-container">
        <div className="text-section">
          <div className="intro-section">
            <span className="main-text">
              {' '}
              <AnimatedLetters
                letterClass={letterClass}
                strArray={productDesignText}
                idx={15}
              />
            </span>
            <p className="main-text-para">
              What differentiates a good UX portfolio from a great portfolio?
              It's feedback. Empower you to build your UX portfolio and land
              your dream job.
            </p>
            <a class="navigation-btn" href="teambition.html">
              Book With Aniket
            </a>
          </div>
        </div>

        <div className="image-section">
          <img src={designSketch} alt="fireSpot" className="sketch-image" />

          <span className="image-description">
            "Thanks for the great session and detailed run-through Lola! <br />
            It was much more thorough than a few other critiques <br />
            I’ve received and the session really touched on <br />
            how I should be communicating about the skills I can bring to the
            table.
          </span>
        </div>
      </div>
      <Loader type="pacman" />

      <div className="portfolio-container">
        <div className="text-section">
          <img src={ecommerce} alt="fireSpot" className="ecommerce-image" />
        </div>

        <div className="image-section-ecommerce">
          <span className="ecommerce-main-text">
            {' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={ohvazBreakfast}
              idx={15}
            />
          </span>
          <p className="ecommerce-text-para">
            I was the sole web designer for a leading conversational AI training
            platform for bank accounts. The new design reduced task times by 68%
            and improved users’ subjective satisfaction by 139%.
          </p>{' '}
          <div className="navigation-btn case-study-btn" href="teambition.html">
            Case Study
          </div>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="text-section">
          Get feedback for your UX portfolio What differentiates a good UX
          portfolio from a great portfolio? It's feedback. Empower you to build
          your UX portfolio and land your dream job.
        </div>

        <div className="image-section">
          <h1> Image coming soon.....</h1>
          <p> Some Description of image</p>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="text-section">
          Get feedback for your UX portfolio What differentiates a good UX
          portfolio from a great portfolio? It's feedback. Empower you to build
          your UX portfolio and land your dream job.
        </div>

        <div className="image-section">
          <h1> Image coming soon.....</h1>
          <p> Some Description of image</p>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="text-section">
          Get feedback for your UX portfolio What differentiates a good UX
          portfolio from a great portfolio? It's feedback. Empower you to build
          your UX portfolio and land your dream job.
        </div>

        <div className="image-section">
          <h1> Image coming soon.....</h1>
          <p> Some Description of image</p>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="text-section">
          Get feedback for your UX portfolio What differentiates a good UX
          portfolio from a great portfolio? It's feedback. Empower you to build
          your UX portfolio and land your dream job.
        </div>

        <div className="image-section">
          <h1> Image coming soon.....</h1>
          <p> Some Description of image</p>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="text-section">
          Get feedback for your UX portfolio What differentiates a good UX
          portfolio from a great portfolio? It's feedback. Empower you to build
          your UX portfolio and land your dream job.
        </div>

        <div className="image-section">
          <h1> Image coming soon.....</h1>
          <p> Some Description of image</p>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
