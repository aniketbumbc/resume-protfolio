import illustrationProblem from '../../../assets/images/case study/illustration-1.jpg';
import illustrationOne from '../../../assets/images/case study/sitting study-3.png';
import illustrationTwo from '../../../assets/images/case study/sitting study-2.png';
import illustrationThree from '../../../assets/images/case study/sitting study.jpeg';
import fontImage from '../../../assets/images/case study/font-learntodo.png';
import breakfastPoster from '../../../assets/images/case study/breakfast-desktop.png';
import { useNavigate, useLocation } from 'react-router-dom';
import breakfastDesktop from '../../../assets/images/case study/Break-fast poster.png';
import {
  productDesignText,
  ohvazBreakfast,
  learnTodoText,
  portfolioText,
  breakFastProject,
  breakFastDescriptionBody,
  breakFastDescriptionIntro,
  breakFastProjectData,
  renoText,
  learnTodoTitle,
} from '../../../constant';

import './index.scss';
import Navigation from '../../Navigation';

const LearnTodo = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="withoutposter-container">
        <div>
          <div className="problem-para">
            {' '}
            <hr className="hr-line" />
            Problem
          </div>

          <div>
            <p className="content-text">
              {' '}
              We noticed that college students find it difficult to practice
              self-care.
            </p>

            <p className="information">
              Inspired by our battles with mental illness, two friends and I
              decided to create a solution for encouraging self-care in everyday
              college life.
            </p>

            <p className="information">
              Witn this solution, we decided to compete in the University of
              Virginia's Social Entreprenuership Competition.
            </p>
          </div>
        </div>

        <div>
          <img
            src={illustrationProblem}
            alt="fireSpot"
            loading="lazy"
            className="study-margin-top-image"
          />
        </div>
      </div>
      <div className="withoutposter-container">
        <div>
          <img
            src={illustrationOne}
            alt="fireSpot"
            loading="lazy"
            className=""
          />
        </div>
        <div>
          <div className="problem-para">
            {' '}
            <hr className="hr-line" />
            Problem
          </div>

          <div>
            <p className="content-text">
              {' '}
              We noticed that college students find it difficult to practice
              self-care.
            </p>

            <p className="information">
              Inspired by our battles with mental illness, two friends and I
              decided to create a solution for encouraging self-care in everyday
              college life.
            </p>

            <p className="information">
              Witn this solution, we decided to compete in the University of
              Virginia's Social Entreprenuership Competition.
            </p>
          </div>
        </div>
      </div>
      <div className="withoutposter-container">
        <div>
          <div className="problem-para">
            {' '}
            <hr className="hr-line" />
            COLORS & FONTS
          </div>

          <div className="color-container">
            <div className="box box-1"> </div>
            <div className="box box-2"></div>
          </div>

          <div className="text-container">
            <div className="color-name">#777FE8</div>

            <div className="color-name">#62CFCD</div>
          </div>
          <div className="color-container">
            <div className="box box-3"> </div>
            <div className="box box-4"> </div>
          </div>
          <div className="text-container">
            <div className="color-name"> #F7F8FA</div>
            <div className="color-name">#AAB0FF</div>
          </div>
        </div>

        <div>
          <img
            src={fontImage}
            alt="fireSpot"
            loading="lazy"
            className="study-margin-top-image"
          />
        </div>
      </div>
      <div className="withoutposter-container">
        <div>
          <img
            src={illustrationThree}
            alt="fireSpot"
            loading="lazy"
            className="study-margin-top-image"
          />
        </div>
        <div>
          <div>
            <p className="content-text">
              {' '}
              We noticed that college students find it difficult to practice
              self-care.
            </p>

            <p className="information">
              Inspired by our battles with mental illness, two friends and I
              decided to create a solution for encouraging self-care in everyday
              college life.
            </p>

            <p className="information">
              Witn this solution, we decided to compete in the University of
              Virginia's Social Entreprenuership Competition.
            </p>
          </div>
        </div>
      </div>
      <div className="withoutposter-container">
        <div>
          <div className="problem-para">
            {' '}
            <hr className="hr-line" />
            Problem
          </div>

          <div>
            <p className="content-text">
              {' '}
              We noticed that college students find it difficult to practice
              self-care.
            </p>

            <p className="information">
              Inspired by our battles with mental illness, two friends and I
              decided to create a solution for encouraging self-care in everyday
              college life.
            </p>

            <p className="information">
              Witn this solution, we decided to compete in the University of
              Virginia's Social Entreprenuership Competition.
            </p>
          </div>
        </div>

        <div>
          <img
            src={illustrationTwo}
            alt="fireSpot"
            loading="lazy"
            className=""
          />
        </div>
      </div>
      <Navigation
        previousData={{
          previousTitle: 'OhvazE-Breakfast',
          previousNavigationText: 'View Case Study',
          backNavigation: 'casestudy',
          previousDescriptionIntro: breakFastDescriptionIntro,
          previousDescriptionBody: breakFastDescriptionBody,
          previousImageSrc: breakfastPoster,
          previousInfosection: breakFastProjectData,
          previousPoster: breakfastDesktop,
          casestudy: true,
        }}
        nextData={{
          nextTitle: 'Reno Inovation',
          nextNavigationText: 'View Case Study',
          frontNavigation: 'casestudy',
          nextDescriptionIntro: breakFastDescriptionIntro,
          nextDescriptionBody: breakFastDescriptionBody,
          nextImageSrc: breakfastDesktop,
          nextInfosection: breakFastProjectData,
          nextPoster: breakfastDesktop,
          title: breakFastProject,
          casestudy: false,
        }}
      />
      dc
    </>
  );
};

export default LearnTodo;

// descriptionIntro: breakFastDescriptionIntro,
//           descriptionBody: breakFastDescriptionBody,
//           imageSrc: breakfastPoster,
//           infoSection: breakFastProjectData,
//           poster: breakfastDesktop,
//           casestudy: true,
