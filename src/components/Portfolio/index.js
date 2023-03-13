import React from 'react';
import { useState, useEffect } from 'react';
//import { nameArray, skills, techStack, workHistory } from '../../constant';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import Loader from 'react-loaders';
import designSketch from '../../assets/images/designer.gif';
import ecommerce from '../../assets/images/ecommerce.jpg';
import learnTodo from '../../assets/images/learnTodo.jpg';
import portfolio from '../../assets/images/porfolio-template.png';
import AnimatedLetters from '../AnimatedLetters';
import showPortfolio from '../../assets/images/case study/portfoilo-disply.png';
import renovationProject from '../../assets/images/renovation.png';
import breakfastDesktop from '../../assets/images/case study/Break-fast poster.png';
import breakfastPoster from '../../assets/images/case study/breakfast-desktop.png';
import renoHeaderPoster from '../../assets/images/case study/reno-heading-picture.png';
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
  portfolioTitle,
  renoTitle,
} from '../../constant';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const navigate = useNavigate();

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
              What differentiates a good to a great product ( web application )?
              It's feedback. Empower your businees by building your UX/UI design
              for product and catch users attention.
            </p>
            <a
              className="navigation-btn"
              href="https://calendly.com/aniket-umbc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Catch Up
            </a>
          </div>
          <div className="skill-info">
            In the upcoming session we will go through overall vision and goals
            of the product, including the target audience, market trends, and
            key features that the product should have. <br />
            Along with topic in depth analysis of research,user testing,
            prototyping, iteration along with color schemes, typography, and
            layout, to ensure that the product looks and feels good to use.
          </div>
        </div>

        <div>
          <img src={designSketch} alt="fireSpot" loading="lazy" />
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
                },
              })
            }
          >
            Case Study
          </div>
        </div>
      </div>

      {/* learn App todo start */}

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
            <p className="left-para-description">
              I was the sole web designer for a leading conversational AI tool
              training platform for bank accounts. The new design reduced task
              times by 68% and improved users’ subjective satisfaction by 139%.
            </p>{' '}
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
        <div className="text-section">
          <img
            src={learnTodo}
            alt="fireSpot"
            className="ecommerce-image"
            loading="lazy"
          />
        </div>
      </div>

      {/* portfolio start here */}

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
            times by 68% and improved users subjective satisfaction by 139%.
          </p>{' '}
          <div
            className="navigation-btn case-study-btn"
            onClick={() =>
              navigate('/casestudy', {
                state: {
                  title: portfolioTitle,
                  descriptionIntro: breakFastDescriptionIntro,
                  descriptionBody: breakFastDescriptionBody,
                  imageSrc: showPortfolio,
                  infoSection: breakFastProjectData,
                  poster: renovationProject,
                },
              })
            }
          >
            Case Study
          </div>
        </div>
      </div>

      {/* reno section start here */}
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
            <p className="left-para-description">
              I was the sole web designer for a leading conversational AI tool
              training platform for bank accounts. The new design reduced task
              times by 68% and improved users’ subjective satisfaction by 139%.
            </p>{' '}
            <div
              className="navigation-btn case-study-btn"
              onClick={() =>
                navigate('/casestudy', {
                  state: {
                    title: renoTitle,
                    descriptionIntro: breakFastDescriptionIntro,
                    descriptionBody: breakFastDescriptionBody,
                    imageSrc: renoHeaderPoster,
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
        <div className="text-section">
          <img
            src={renovationProject}
            alt="fireSpot"
            className="ecommerce-image"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
