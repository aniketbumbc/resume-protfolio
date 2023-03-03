import './index.scss';
import carpainter from '../../../assets/images/case study/carpainter.png';
import wireframe from '../../../assets/images/case study/Wire-frame.png';
import sitesmaps from '../../../assets/images/case study/site-maps.png';
import userflow from '../../../assets/images/case study/user-flow.png';
import prototype from '../../../assets/images/case study/prototype.png';
import showPortfolio from '../../../assets/images/case study/portfoilo-disply.png';
import breakfastDesktop from '../../../assets/images/case study/Break-fast poster.png';
import Navigation from '../../Navigation';
import {
  breakFastDescriptionBody,
  breakFastDescriptionIntro,
  breakFastProjectData,
  portfolioTitle,
} from '../../../constant';

const Reno = () => {
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
            src={carpainter}
            alt="fireSpot"
            loading="lazy"
            className="study-margin-top-image"
          />
        </div>
      </div>

      <div className="process">
        <div className="problem-para">
          {' '}
          <hr className="hr-line" />
          Wireframe
          <hr className="hr-line" />
        </div>
        <p className="information">
          We noticed that college students find it difficult to practice
          self-care. Inspired by our battles with mental illness, two friends
          and I decided to create a solution for encouraging self-care in
          everyday college life. Witn this solution, we decided to compete in
          the University of Virginia's Social Entreprenuership Competition.
        </p>
        <div className="process-image">
          <img src={wireframe} alt="fireSpot" loading="lazy" />
        </div>
      </div>
      <div className="process">
        <div className="problem-para">
          {' '}
          <hr className="hr-line" />
          Sites Map
          <hr className="hr-line" />
        </div>
        <p className="information">
          We noticed that college students find it difficult to practice
          self-care. Inspired by our battles with mental illness, two friends
          and I decided to create a solution for encouraging self-care in
          everyday college life. Witn this solution, we decided to compete in
          the University of Virginia's Social Entreprenuership Competition.
        </p>
        <div className="process-image">
          <img src={sitesmaps} alt="fireSpot" loading="lazy" />
        </div>
      </div>
      <div className="process">
        <div className="problem-para">
          {' '}
          <hr className="hr-line" />
          User Flow
          <hr className="hr-line" />
        </div>
        <p className="information">
          We noticed that college students find it difficult to practice
          self-care. Inspired by our battles with mental illness, two friends
          and I decided to create a solution for encouraging self-care in
          everyday college life. Witn this solution, we decided to compete in
          the University of Virginia's Social Entreprenuership Competition.
        </p>
        <div className="process-image">
          <img src={userflow} alt="fireSpot" loading="lazy" />
        </div>
      </div>
      <div className="process">
        <div className="problem-para">
          {' '}
          <hr className="hr-line" />
          Prototype
          <hr className="hr-line" />
        </div>
        <p className="information">
          We noticed that college students find it difficult to practice
          self-care. Inspired by our battles with mental illness, two friends
          and I decided to create a solution for encouraging self-care in
          everyday college life. Witn this solution, we decided to compete in
          the University of Virginia's Social Entreprenuership Competition.
        </p>
        <div className="process-image">
          <img src={prototype} alt="fireSpot" loading="lazy" />
        </div>
      </div>

      <Navigation
        previousData={{
          previousTitle: portfolioTitle,
          previousNavigationText: 'View Case Study',
          backNavigation: 'casestudy',
          previousDescriptionIntro: breakFastDescriptionIntro,
          previousDescriptionBody: breakFastDescriptionBody,
          previousImageSrc: showPortfolio,
          previousInfosection: breakFastProjectData,
          previousPoster: breakfastDesktop,
        }}
        nextData={{
          nextTitle: 'Portfolio',
          nextNavigationText: 'Back To Portfolio',
          frontNavigation: 'portfolio',
        }}
      />
    </>
  );
};

export default Reno;
