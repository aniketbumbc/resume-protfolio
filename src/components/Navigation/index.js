import { useNavigate } from 'react-router-dom';
import './index.scss';
const Navigation = ({ previousData, nextData }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navigation-container">
        <div className="inner-navigation-container">
          <div className="navigation-text">
            <h2>
              PREVIOUS:{' '}
              <span className="navigation-title">
                {' '}
                {previousData?.previousTitle}{' '}
              </span>
            </h2>{' '}
            <h3
              className="case-study navigation-title"
              onClick={() =>
                navigate(`/${previousData?.backNavigation}`, {
                  state: {
                    title: previousData?.previousTitle,
                    descriptionIntro: previousData?.previousDescriptionIntro,
                    descriptionBody: previousData?.previousDescriptionBody,
                    imageSrc: previousData?.previousImageSrc,
                    infoSection: previousData?.previousInfosection,
                    poster: previousData?.previousPoster,
                  },
                })
              }
            >
              {previousData?.previousNavigationText}
            </h3>
          </div>
          <div className="navigation-text">
            <h2>
              NEXT:
              <span className="navigation-title"> {nextData.nextTitle} </span>
            </h2>
            <h3
              className="case-study navigation-title"
              onClick={() =>
                navigate(`/${nextData.frontNavigation}`, {
                  state: {
                    title: nextData.nextTitle,
                    descriptionIntro: nextData.nextDescriptionIntro,
                    descriptionBody: nextData.nextDescriptionBody,
                    imageSrc: nextData.nextImageSrc,
                    infoSection: nextData.nextInfosection,
                    poster: nextData.nextPoster,
                  },
                })
              }
            >
              {nextData.nextNavigationText}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
