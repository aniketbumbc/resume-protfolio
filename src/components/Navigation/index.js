import { useNavigate } from 'react-router-dom';
import './index.scss';
const Navigation = ({
  previousTitle,
  previousNavigationText,
  nextTitle,
  nextNavigationText,
  backNavigation,
  frontNavigation,
  stateTitle,
  stateDescriptionIntro,
  stateDescriptionBody,
  stateImageSrc,
  stateInfosection,
  statePoster,
  stateCasestudy,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navigation-container">
        <div className="inner-navigation-container">
          <div className="navigation-text">
            <h2>
              PREVIOUS: <span> {previousTitle} </span>
            </h2>{' '}
            <h3
              className="case-study"
              onClick={() => navigate(`/${backNavigation}`)}
            >
              {previousNavigationText}
            </h3>
          </div>
          <div className="navigation-text">
            <h2>
              NEXT:<span> {nextTitle} </span>
            </h2>
            <h3
              className="case-study"
              onClick={() =>
                navigate(`/${frontNavigation}`, {
                  state: {
                    title: stateTitle,
                    descriptionIntro: stateDescriptionIntro,
                    descriptionBody: stateDescriptionBody,
                    imageSrc: stateImageSrc,
                    infoSection: stateInfosection,
                    poster: statePoster,
                  },
                })
              }
            >
              {nextNavigationText}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
