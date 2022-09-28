import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jobArray, nameArray } from '../../constant';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import userImage from '../../assets/images/Aniket-photo-2.png';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="home-page">
          {' '}
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={25}
              />
            </h1>
            <h2>Fullstack Developer / Javascript Developer</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>
        <Loader type="pacman" />
        <div className="image-section">
          {/* <svg
            className="home__blob"
            viewBox="10 10 879 867"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="mask0" mask-type="alpha">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            </mask>
            <g mask="url(#mask0)">
              <path
                fill="#08BDBA"
                d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
              />

              <image
                className="blob-img"
                x="-500"
                y="-100"
                xlinkHref={userImage}
              />
            </g>
          </svg> */}
          {/* <img className="home-blob" src={userImage} alt="aniket-b" /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
