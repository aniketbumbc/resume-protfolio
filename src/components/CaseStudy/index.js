import './index.scss';

import { useLocation } from 'react-router-dom';

import {
  breakFastProject,
  portfolioTitle,
  learnTodoTitle,
  renoTitle,
} from '../../constant';
import LearnTodo from './LearnTodo';
import FreelancePortfolio from './FreelancePortfolio';
import Reno from './Reno';
import EBreakfast from './Breakfast';
const CaseStudy = () => {
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
          {infoSection.map((value, index) => {
            return (
              <>
                <div key={index + value.title}>
                  <p className="title"> {value.title}</p>
                  <p className="information">{value.information}</p>
                  <p className="information">{value.shortInfo}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {title === breakFastProject && <EBreakfast poster={poster} />}
      {title === learnTodoTitle && <LearnTodo />}
      {title === portfolioTitle && <FreelancePortfolio />}
      {title === renoTitle && <Reno />}
    </>
  );
};
export default CaseStudy;
