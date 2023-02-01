import './index.scss';
import { useLocation } from 'react-router-dom';

const CaseStudy = () => {
  const { state } = useLocation();
  const { title, descriptionIntro, descriptionBody, imageSrc } = state;
  return (
    <>
      <div className="casestudy-container">
        <div className="information-containter">
          <div className="project-header">{title}</div>

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
    </>
  );
};

export default CaseStudy;
