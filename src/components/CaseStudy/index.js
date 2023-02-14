import './index.scss';
import { useLocation } from 'react-router-dom';

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
        <h1> No Hello</h1>
      )}
    </>
  );
};
export default CaseStudy;
