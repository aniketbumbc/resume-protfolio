import './index.scss';
import illustrationProblem from '../../assets/images/case study/illustration-1.jpg';
import illustrationOne from '../../assets/images/case study/sitting study-3.png';
import illustrationTwo from '../../assets/images/case study/sitting study-2.png';
import illustrationThree from '../../assets/images/case study/sitting study.jpeg';
import fontImage from '../../assets/images/case study/font-learntodo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import leantodoapp from '../../assets/images/case study/learntodoapp-desktop.png';
import breakfastDesktop from '../../assets/images/case study/Break-fast poster.png';
import breakfastPoster from '../../assets/images/case study/breakfast-desktop.png';

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
import Navigation from '../Navigation';
const CaseStudy = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    title,
    descriptionIntro,
    descriptionBody,
    imageSrc,
    infoSection,
    poster,
    casestudy,
  } = state;

  return (
    <>
      <div className="casestudy-container">
        <div className="information-containter">
          <div className="project-title">{title}</div>
          <p>{descriptionIntro}</p>
          <p>{descriptionBody}</p>
        </div>
        <div className="image-containter">
          <img src={imageSrc} alt="fireSpot" loading="lazy" className="" />
        </div>
      </div>
      <div className="rectangle">
        <div className="cotainer-data">
          {infoSection.map((value) => {
            return (
              <>
                <div>
                  <p className="title"> {value.title}</p>
                  <p className="information">{value.information}</p>
                  <p className="information">{value.shortInfo}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {casestudy ? (
        <>
          <div className="main-image">
            <img src={poster} alt="fireSpot" loading="lazy" className="" />
          </div>
          <Navigation
            previousTitle={'Protfolio'}
            previousNavigationText={'Back To Portfolio'}
            nextTitle={'E-Learning Course'}
            nextNavigationText={'View Case Study'}
            backNavigation={'portfolio'}
            frontNavigation={'casestudy'}
            stateTitle={learnTodoTitle}
            stateDescriptionIntro={breakFastDescriptionIntro}
            stateDescriptionBody={breakFastDescriptionBody}
            stateImageSrc={leantodoapp}
            stateInfosection={breakFastProjectData}
            statePoster={breakfastDesktop}
          />
        </>
      ) : (
        <>
          <div className="withoutposter-container">
            <div>
              <div className="problem-para">
                {' '}
                <hr className="hr-line" />
                Problem
              </div>

              <div>
                <p className="content-text">
                  {' '}
                  We noticed that college students find it difficult to practice
                  self-care.
                </p>

                <p className="information">
                  Inspired by our battles with mental illness, two friends and I
                  decided to create a solution for encouraging self-care in
                  everyday college life.
                </p>

                <p className="information">
                  Witn this solution, we decided to compete in the University of
                  Virginia's Social Entreprenuership Competition.
                </p>
              </div>
            </div>

            <div>
              <img
                src={illustrationProblem}
                alt="fireSpot"
                loading="lazy"
                className="study-margin-top-image"
              />
            </div>
          </div>

          <div className="withoutposter-container">
            <div>
              <img
                src={illustrationOne}
                alt="fireSpot"
                loading="lazy"
                className=""
              />
            </div>
            <div>
              <div className="problem-para">
                {' '}
                <hr className="hr-line" />
                Problem
              </div>

              <div>
                <p className="content-text">
                  {' '}
                  We noticed that college students find it difficult to practice
                  self-care.
                </p>

                <p className="information">
                  Inspired by our battles with mental illness, two friends and I
                  decided to create a solution for encouraging self-care in
                  everyday college life.
                </p>

                <p className="information">
                  Witn this solution, we decided to compete in the University of
                  Virginia's Social Entreprenuership Competition.
                </p>
              </div>
            </div>
          </div>

          <div className="withoutposter-container">
            <div>
              <div className="problem-para">
                {' '}
                <hr className="hr-line" />
                COLORS & FONTS
              </div>

              <div className="color-container">
                <div className="box box-1"> </div>
                <div className="box box-2"></div>
              </div>

              <div className="text-container">
                <div className="color-name">#777FE8</div>

                <div className="color-name">#62CFCD</div>
              </div>
              <div className="color-container">
                <div className="box box-3"> </div>
                <div className="box box-4"> </div>
              </div>
              <div className="text-container">
                <div className="color-name"> #F7F8FA</div>
                <div className="color-name">#AAB0FF</div>
              </div>
            </div>

            <div>
              <img
                src={fontImage}
                alt="fireSpot"
                loading="lazy"
                className="study-margin-top-image"
              />
            </div>
          </div>

          <div className="withoutposter-container">
            <div>
              <img
                src={illustrationThree}
                alt="fireSpot"
                loading="lazy"
                className="study-margin-top-image"
              />
            </div>
            <div>
              <div>
                <p className="content-text">
                  {' '}
                  We noticed that college students find it difficult to practice
                  self-care.
                </p>

                <p className="information">
                  Inspired by our battles with mental illness, two friends and I
                  decided to create a solution for encouraging self-care in
                  everyday college life.
                </p>

                <p className="information">
                  Witn this solution, we decided to compete in the University of
                  Virginia's Social Entreprenuership Competition.
                </p>
              </div>
            </div>
          </div>

          <div className="withoutposter-container">
            <div>
              <div className="problem-para">
                {' '}
                <hr className="hr-line" />
                Problem
              </div>

              <div>
                <p className="content-text">
                  {' '}
                  We noticed that college students find it difficult to practice
                  self-care.
                </p>

                <p className="information">
                  Inspired by our battles with mental illness, two friends and I
                  decided to create a solution for encouraging self-care in
                  everyday college life.
                </p>

                <p className="information">
                  Witn this solution, we decided to compete in the University of
                  Virginia's Social Entreprenuership Competition.
                </p>
              </div>
            </div>

            <div>
              <img
                src={illustrationTwo}
                alt="fireSpot"
                loading="lazy"
                className=""
              />
            </div>
          </div>

          {state.poster.search('renovation') ? (
            <div className="navigation-container">
              <div className="inner-navigation-container margin-top">
                <div className="navigation-text">
                  <h2>
                    PREVIOUS: <span> E-Learning Course </span>
                  </h2>{' '}
                  <h3
                    className="case-study"
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
                    View Case Study
                  </h3>
                </div>
                <div className="navigation-text">
                  <h2>
                    NEXT:<span> Reno Inovation </span>
                  </h2>
                  <h3
                    className="case-study"
                    onClick={() => navigate(`/portfolio`)}
                  >
                    View Case Study
                  </h3>
                </div>
              </div>
            </div>
          ) : (
            <div className="navigation-container">
              <div className="inner-navigation-container margin-top">
                <div className="navigation-text">
                  <h2>
                    PREVIOUS: <span> Test OhvazE-Breakfast </span>
                  </h2>{' '}
                  <h3
                    className="case-study"
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
                    View Case Study
                  </h3>
                </div>
                <div className="navigation-text">
                  <h2>
                    NEXT:<span> Yes E-Learning Course </span>
                  </h2>
                  <h3
                    className="case-study"
                    onClick={() => navigate(`/portfolio`)}
                  >
                    View Case Study
                  </h3>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
export default CaseStudy;
