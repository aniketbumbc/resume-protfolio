import './index.scss';
import imageFont from '../../../assets/images/case study/font-porfolio.png';
import colorPalette from '../../../assets/images/case study/color-palette.png';
import Navigation from '../../Navigation';
import breakfastPoster from '../../../assets/images/case study/breakfast-desktop.png';
import breakfastDesktop from '../../../assets/images/case study/Break-fast poster.png';
import renoHeaderPoster from '../../../assets/images/case study/reno-heading-picture.png';

import {
  breakFastDescriptionBody,
  breakFastDescriptionIntro,
  breakFastProjectData,
  freelanceProjectData,
  learnTodoTitle,
  renoBody,
  renoIntro,
  renoTitle,
} from '../../../constant';

const FreelancePortfolio = () => {
  return (
    <>
      <div className="main-container">
        <div>
          <img
            src={colorPalette}
            alt="fireSpot"
            loading="lazy"
            className="study-margin-top-image margin-left"
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
          nextDescriptionIntro: renoIntro,
          nextDescriptionBody: renoBody,
          nextImageSrc: renoHeaderPoster,
          nextInfosection: freelanceProjectData,
          title: renoTitle,
        }}
      />
    </>
  );
};

export default FreelancePortfolio;
