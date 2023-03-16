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
  freelanceProjectData,
  freelanceProtfolioBody,
  freelanceProtfolioIntro,
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
              In the digital technology era for growing business business owners
              need more online presences.
            </p>

            <p className="information">
              We noticed that there are some industries still working in the
              offline era and capturing a little local market. Inspired by the
              digital web, two of my friends and I decided to create a solution
              that assists to grow the local economy and acquire a large cap
              market.
            </p>
            <p className="information">
              The solution was simple to make more online appearance and sell
              the product via mail or provide services beyond town.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '100px' }}>
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
          The requirements gathering and understanding wireframes is the first
          step of the design process. It is a visual representation of a website
          or mobile app's layout that shows the placement of various elements on
          the page. It is typically created in the early stages of the design
          process, before any visual design elements such as colors, typography,
          or images are added.
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
          A site map is a visual or written representation of the structure and
          hierarchy of a website's content. It is essentially a blueprint of a
          website that shows the relationship between different pages, sections,
          and sub-sections. Site maps typically include the main navigation
          menu, as well as any sub-menus on dropdowns
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
          User flow refers to the path that a user takes through a website or
          application to achieve a specific goal or complete a task. It
          typically starts with the user's entry point, such as a homepage or
          landing page, and includes all the steps and interactions that are
          necessary to accomplish the desired outcome.
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
          A prototype is a preliminary version of a product or design that is
          created to test and evaluate its functionality, features, and user
          experience before the final version is developed. Prototyping is an
          important part of the design process because it allows designers to
          quickly and cheaply test their ideas and get feedback from users and
          stakeholders.
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
          previousDescriptionIntro: freelanceProtfolioIntro,
          previousDescriptionBody: freelanceProtfolioBody,
          previousImageSrc: showPortfolio,
          previousInfosection: freelanceProjectData,
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
