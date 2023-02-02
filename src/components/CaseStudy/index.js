import './index.scss';
import { useLocation } from 'react-router-dom';

const CaseStudy = () => {
  const { state } = useLocation();
  const { title, descriptionIntro, descriptionBody, imageSrc } = state;
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
          <div>
            <p className="title"> Role</p>
            <p className="information">Entreprenurial Project</p>
            <p className="information">Project Lead</p>
          </div>
          <div>
            <p className="title"> Team</p>
            <p className="information">Entreprenurial Project</p>
            <p className="information">Project Lead</p>
          </div>
          <div>
            <p className="title"> Duration</p>
            <p className="information">Entreprenurial Project</p>
            <p className="information">Project Lead</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
