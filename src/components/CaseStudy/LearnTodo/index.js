import illustrationProblem from '../../../assets/images/case study/illustration-1.png';
import illustrationOne from '../../../assets/images/case study/Sketch.png';
import prototype from '../../../assets/images/case study/Prototype-Screen.png';
import fontImage from '../../../assets/images/case study/font-learntodo.png';
import breakfastPoster from '../../../assets/images/case study/breakfast-desktop.png';
import showPortfolio from '../../../assets/images/case study/portfoilo-disply.png';

import breakfastDesktop from '../../../assets/images/case study/Break-fast poster.png';
import {
  breakFastDescriptionBody,
  breakFastDescriptionIntro,
  breakFastProjectData,
  freelanceProjectData,
  freelanceProtfolioBody,
  freelanceProtfolioIntro,
  portfolioTitle,
  renoTitle,
} from '../../../constant';
import './index.scss';
import Navigation from '../../Navigation';

const LearnTodo = () => {
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
              We noticed that school and college students find it difficult to
              access advanced course material offline.
            </p>

            <p className="information">
              Inspired by our battles education for everyone.
            </p>
            <p className="information">
              With this solution, we decided to collaborate with the best
              university in the world and access their course material in our
              online courses .
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
        <div className="fidelity-sketch">
          <img
            src={illustrationOne}
            alt="fireSpot"
            loading="lazy"
            className="sketch-image-margin"
          />
          <p> Low fidelity sketches </p>
        </div>

        <div>
          <div className="problem-para">
            {' '}
            <hr className="hr-line" />
            Design Process
          </div>

          <div>
            <p className="content-text">
              {' '}
              The first step of a design process is to understand requirements
              and user's  working environment.
            </p>

            <p className="information">
              <ul>
                <li>Interview a bunch of people</li>
                <li>Brainstorm (only using Post-Its)</li>
                <li>Do a lot of low fidelity sketches</li>
                <li>Make some wireframes</li>
                <li>Create high fidelity mockups (.~*pixel perfect.~*)</li>
                <li>Iterate, iterate, iterate ( Getting Feedback ) </li>
              </ul>
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
            className="study-image"
          />
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
          Prototyping is an essential step in UX design that helps to ensure the
          usability and effectiveness of the final product or interface.. It is
          an iterating and refining process based on user feedback, and
          finalizing and implementing the design.
        </p>
        <div className="process-image">
          <img src={prototype} alt="fireSpot" loading="lazy" />
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
        }}
        nextData={{
          nextTitle: portfolioTitle,
          nextNavigationText: 'View Case Study',
          frontNavigation: 'casestudy',
          nextDescriptionIntro: freelanceProtfolioIntro,
          nextDescriptionBody: freelanceProtfolioBody,
          nextImageSrc: showPortfolio,
          nextInfosection: freelanceProjectData,
          nextPoster: breakfastDesktop,
          title: renoTitle,
        }}
      />
    </>
  );
};

export default LearnTodo;
