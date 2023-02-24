import './index.scss';

import { useNavigate, useLocation } from 'react-router-dom';
import leantodoapp from '../../assets/images/case study/learntodoapp-desktop.png';
import breakfastDesktop from '../../assets/images/case study/Break-fast poster.png';
import breakfastPoster from '../../assets/images/case study/breakfast-desktop.png';

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
} from '../../constant';
import Navigation from '../Navigation';
import LearnTodo from './LearnTodo';
import FreelancePortfolio from './FreelancePortfolio';
import Reno from './Reno';
const CaseStudy = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    title,
    descriptionIntro,
    descriptionBody,
    imageSrc,
    infoSection,
    poster,
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
          <img src={imageSrc} alt="fireSpot" loading="lazy" className="" />
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

      {title === breakFastProject && (
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
              casestudy: false,
            }}
          />
        </>
      )}

      {title === learnTodoTitle && <LearnTodo />}
      {title === portfolioTitle && <FreelancePortfolio />}
      {title === renoTitle && <Reno />}
    </>
  );
};
export default CaseStudy;
