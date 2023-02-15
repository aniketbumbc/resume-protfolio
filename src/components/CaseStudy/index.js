import './index.scss';
import { useLocation } from 'react-router-dom';
import illustrationProblem from '../../assets/images/case study/illustration-1.png';
import illustrationOne from '../../assets/images/case study/sitting study-3.png';
import illustrationTwo from '../../assets/images/case study/sitting study-2.jpeg';
import illustrationThree from '../../assets/images/case study/sitting study.jpeg';

const CaseStudy = () => {
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
          <img
            src={imageSrc}
            alt="fireSpot"
            loading="lazy"
            className="sketch-image-todoapp"
          />
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
            <img
              src={poster}
              alt="fireSpot"
              loading="lazy"
              className="sketch-image-todoapp"
            />
          </div>
          <div className="navigation-container">
            <div className="inner-navigation-container">
              <div className="navigation-text">
                <h2>
                  PREVIOUS: <span> E-Breakfast</span>
                </h2>{' '}
                <h3 className="case-study">View Case Study</h3>
              </div>
              <div className="navigation-text">
                <h2>
                  NEXT:<span> E-Education</span>
                </h2>
                <h3 className="case-study">View Case Study</h3>
              </div>
            </div>
          </div>
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
                className="sketch-image-todoapp"
              />
            </div>
          </div>

          <div className="withoutposter-container">
            <div>
              <img
                src={illustrationOne}
                alt="fireSpot"
                loading="lazy"
                className="sketch-image-todoapp"
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
                className="sketch-image-todoapp"
              />
            </div>
          </div>

          <div className="withoutposter-container">
            <div>
              <img
                src={illustrationThree}
                alt="fireSpot"
                loading="lazy"
                className="sketch-image-todoapp"
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
                className="sketch-image-todoapp"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default CaseStudy;
