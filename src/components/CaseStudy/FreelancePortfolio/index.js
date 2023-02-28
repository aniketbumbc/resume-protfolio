import './index.scss';
import imageFont from '../../../assets/images/case study/font-learntodo.png';
import Navigation from '../../Navigation';
import breakfastPoster from '../../../assets/images/case study/breakfast-desktop.png';
import breakfastDesktop from '../../../assets/images/case study/Break-fast poster.png';
import {
  breakFastDescriptionBody,
  breakFastDescriptionIntro,
  breakFastProjectData,
  learnTodoTitle,
  renoTitle,
} from '../../../constant';

const FreelancePortfolio = () => {
  return (
    <>
      <div className="main-container">
        <div>
          <img
            src={imageFont}
            alt="fireSpot"
            loading="lazy"
            className="study-margin-top-image"
          />
        </div>
        <div>
          {' '}
          <img
            src={imageFont}
            alt="fireSpot"
            loading="lazy"
            className="study-margin-top-image"
          />
        </div>
      </div>

      <Navigation
        previousData={{
          previousTitle: learnTodoTitle,
          previousNavigationText: 'View Case Study',
          backNavigation: 'casestudy',
          previousDescriptionIntro: breakFastDescriptionIntro,
          previousDescriptionBody: breakFastDescriptionBody,
          previousImageSrc: breakfastPoster,
          previousInfosection: breakFastProjectData,
          previousPoster: breakfastDesktop,
        }}
        nextData={{
          nextTitle: renoTitle,
          nextNavigationText: 'View Case Study',
          frontNavigation: 'casestudy',
          nextDescriptionIntro: breakFastDescriptionIntro,
          nextDescriptionBody: breakFastDescriptionBody,
          nextImageSrc: breakfastPoster,
          nextInfosection: breakFastProjectData,
          nextPoster: breakfastDesktop,
          title: renoTitle,
        }}
      />
    </>
  );
};

export default FreelancePortfolio;
