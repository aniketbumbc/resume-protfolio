import Navigation from '../../Navigation';
import {
  productDesignText,
  ohvazBreakfast,
  learnTodoText,
  portfolioText,
  breakFastProject,
  breakFastDescriptionBody,
  breakFastDescriptionIntro,
  breakFastProjectData,
  portfolioTitle,
  renoText,
  learnTodoTitle,
  renoTitle,
} from '../../../constant';

import leantodoapp from '../../../assets/images/case study/learntodoapp-desktop.png';
import breakfastDesktop from '../../../assets/images/case study/Break-fast poster.png';
import breakfastPoster from '../../../assets/images/case study/breakfast-desktop.png';

const EBreakfast = ({ poster }) => {
  return (
    <>
      <div className="main-image">
        <img src={poster} alt="fireSpot" loading="lazy" className="" />
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
