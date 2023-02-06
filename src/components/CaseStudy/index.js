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

      <div className="rectange">
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

      <div className="main-image">
        <img
          src={imageSrc}
          alt="fireSpot"
          loading="lazy"
          className="sketch-image-todoapp"
        />
      </div>
    </>
  );
};

export default CaseStudy;
