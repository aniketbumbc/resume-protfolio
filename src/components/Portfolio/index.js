import React from 'react';
import { useState, useEffect } from 'react';
//import { nameArray, skills, techStack, workHistory } from '../../constant';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import Loader from 'react-loaders';
import designSketch from '../../assets/images/design-1.jpg';
import ecommerce from '../../assets/images/ecommerce.jpg';
import learnTodo from '../../assets/images/learnTodo.png';
import portfolio from '../../assets/images/porfolio-template.png';
import AnimatedLetters from '../AnimatedLetters';
import renovationProject from '../../assets/images/renovation.png';
import breakfastDesktop from '../../assets/images/case study/Break-fast poster.png';
import breakfastPoster from '../../assets/images/case study/breakfast-desktop.png';
import leantodoapp from '../../assets/images/case study/learntodoapp-desktop.png';
import {
  productDesignText,
  ohvazBreakfast,
  learnTodoText,
  portfolioText,
  breakFastProject,
  breakFastDescriptionBody,
  breakFastDescriptionIntro,
  breakFastProjectData,
  renoText,
  learnTodoTitle,
} from '../../constant';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  let navigate = useNavigate();

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
            <a className="navigation-btn" href="teambition.html">
              Book With Aniket
            </a>
          </div>
        </div>

        <div className="image-section">
          <img
            src={designSketch}
            alt="fireSpot"
            className="sketch-image"
            loading="lazy"
          />

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
          <img
            src={ecommerce}
            alt="fireSpot"
            className="ecommerce-image"
            loading="lazy"
          />
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
          <div
            className="navigation-btn case-study-btn"
            onClick={() =>
              navigate('/casestudy', {
                state: {
                  title: breakFastProject,
                  descriptionIntro: breakFastDescriptionIntro,
                  descriptionBody: breakFastDescriptionBody,
                  imageSrc: breakfastPoster,
                  infoSection: breakFastProjectData,
                  poster: breakfastDesktop,
                  casestudy: true,
                },
              })
            }
          >
            Case Study
          </div>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="text-section todo-header">
          <div className="intro-section">
            <span className="main-text">
              {' '}
              <AnimatedLetters
                letterClass={letterClass}
                strArray={learnTodoText}
                idx={15}
              />
            </span>
            <p className="main-text-para">
              What differentiates a good UX portfolio from a great portfolio?
              It's feedback. Empower you to build your UX portfolio and land
              your dream job.
            </p>
            <div
              className="navigation-btn case-study-btn"
              onClick={() =>
                navigate('/casestudy', {
                  state: {
                    title: learnTodoTitle,
                    descriptionIntro: breakFastDescriptionIntro,
                    descriptionBody: breakFastDescriptionBody,
                    imageSrc: leantodoapp,
                    infoSection: breakFastProjectData,
                    poster: breakfastDesktop,
                  },
                })
              }
            >
              Case Study
            </div>
          </div>
        </div>

        <div className="image-section">
          <img
            src={learnTodo}
            alt="fireSpot"
            loading="lazy"
            className="sketch-image-todoapp"
          />

          <span className="image-description todo-image-para">
            "Thanks for the great session and detailed run-through Lola! <br />
            It was much more thorough than a few other critiques <br />
            I’ve received and the session really touched on <br />
            how I should be communicating about the skills I can bring to the
            table.
          </span>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="text-section">
          <img
            src={portfolio}
            alt="fireSpot"
            className="ecommerce-image"
            loading="lazy"
          />
        </div>

        <div className="image-section-ecommerce portfolio-header">
          <span className="ecommerce-main-text">
            {' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={portfolioText}
              idx={15}
            />
          </span>
          <p className="ecommerce-text-para">
            I was the sole web designer for a leading conversational AI tool
            training platform for bank accounts. The new design reduced task
            times by 68% and improved users’ subjective satisfaction by 139%.
          </p>{' '}
          <div
            className="navigation-btn case-study-btn"
            onClick={() =>
              navigate('/casestudy', {
                state: {
                  title: breakFastProject,
                  descriptionIntro: breakFastDescriptionIntro,
                  descriptionBody: breakFastDescriptionBody,
                  imageSrc: breakfastPoster,
                  infoSection: breakFastProjectData,
                  poster: breakfastDesktop,
                },
              })
            }
          >
            Case Study
          </div>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="text-section todo-header">
          <div className="intro-section">
            <span className="main-text">
              {' '}
              <AnimatedLetters
                letterClass={letterClass}
                strArray={renoText}
                idx={15}
              />
            </span>
            <p className="main-text-para">
              What differentiates a good UX portfolio from a great portfolio?
              It's feedback. Empower you to build your UX portfolio and land
              your dream job.
            </p>
            <div
              className="navigation-btn case-study-btn"
              onClick={() =>
                navigate('/casestudy', {
                  state: {
                    title: breakFastProject,
                    descriptionIntro: breakFastDescriptionIntro,
                    descriptionBody: breakFastDescriptionBody,
                    imageSrc: breakfastPoster,
                    infoSection: breakFastProjectData,
                    poster: breakfastDesktop,
                  },
                })
              }
            >
              Case Study
            </div>
          </div>
        </div>

        <div className="image-section">
          <img
            src={renovationProject}
            alt="fireSpot"
            loading="lazy"
            className="sketch-image-todoapp"
          />

          <span className="image-description todo-image-para">
            "Thanks for the great session and detailed run-through Lola! <br />
            It was much more thorough than a few other critiques <br />
            I’ve received and the session really touched on <br />
            how I should be communicating about the skills I can bring to the
            table.
          </span>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
