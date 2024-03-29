import Navigation from '../../Navigation';
import {
  breakFastDescriptionBody,
  breakFastDescriptionIntro,
  breakFastProjectData,
} from '../../../constant';

import leantodoapp from '../../../assets/images/case study/learntodoapp-desktop.png';
import breakfastDesktop from '../../../assets/images/case study/Break-fast poster.png';

const EBreakfast = ({ poster }) => {
  return (
    <>
      <div className="main-image">
        <img src={poster} alt="fireSpot" loading="lazy" />
      </div>
      <Navigation
        previousData={{
          previousTitle: 'Portfolio',
          previousNavigationText: 'Back To Portfolio',
          backNavigation: 'portfolio',
        }}
        nextData={{
          nextTitle: 'Learn Todo App',
          nextNavigationText: 'View Case Study',
          frontNavigation: 'casestudy',
          nextDescriptionIntro: breakFastDescriptionIntro,
          nextDescriptionBody: breakFastDescriptionBody,
          nextImageSrc: leantodoapp,
          nextInfosection: breakFastProjectData,
          nextPoster: breakfastDesktop,
          title: 'Learn Todo App',
        }}
      />
    </>
  );
};

export default EBreakfast;
