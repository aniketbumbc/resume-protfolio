import './index.scss';
import reactLogoImage from '../../assets/images/react.png';
import quicargoImage from '../../assets/images/logoQuicargo.jpeg';
import helloFresh from '../../assets/images/hello-fresh.png';
import unibet from '../../assets/images/unibet.png';
import reduxImage from '../../assets/images/redux.jpeg';
import QandA from '../../assets/images/QnA.png';
import rikcy from '../../assets/images/ricky.jpg';
import toDoList from '../../assets/images/todo.png';
import countrySearch from '../../assets/images/country search.jpeg';
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShowCodeSkill = () => {
  return (
    <>
      <div className="info">
        These are some code samples / tasks which I developed while the code
        challenge / free time. I always believe there is always scope for
        improvement in each work / code quality. I am always looking forward for
        new learning and gaining novel methods of implementation as an improving
        Software Engineer.
      </div>
      <div className="card-container">
        <div className="card">
          <div className="image">
            <img src={reactLogoImage} alt="reactLogoImage" loading="lazy" />
          </div>

          <div className="details">
            <div className="center">
              <h1>Hacker News App </h1>
              <span>React Js, Java Script, Hooks,Css </span>
              <h1>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/aniketbumbc/Hacker-news-app"
                >
                  <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://aniketbumbc.github.io/Hacker-news-app/"
                >
                  <FontAwesomeIcon icon={faReact} color="white" />
                </a>
              </h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={quicargoImage} alt="reactLogoImage" loading="lazy" />
          </div>

          <div className="details">
            <div className="center">
              <h1>Quicargo Logistics</h1>
              <span>Typescript, React, Scss, React Testing Library, </span>
              <h1>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/aniketbumbc/quicargo-logistics"
                >
                  <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://aniketbumbc.github.io/quicargo-logistics/"
                >
                  <FontAwesomeIcon icon={faReact} color="white" />
                </a>
              </h1>
            </div>
          </div>
        </div>{' '}
        <div className="card">
          <div className="image">
            <img src={helloFresh} alt="helloFresh" loading="lazy" />
          </div>

          <div className="details">
            <div className="center">
              <h1>Hello Fresh </h1>
              <span>React JS, Hooks, Css, Modular Approach </span>
              <h1>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/aniketbumbc/hello-fresh/"
                >
                  <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://aniketbumbc.github.io/hello-fresh/"
                >
                  <FontAwesomeIcon icon={faReact} color="white" />
                </a>
              </h1>
            </div>
          </div>
        </div>{' '}
        <div className="card">
          <div className="image">
            <img src={QandA} alt="reduxImage" loading="lazy" />
          </div>

          <div className="details">
            <div className="center">
              <h1>The Awesome Q-A Tool</h1>
              <span>React, Hooks, Css, Redux </span>
              <h1>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/aniketbumbc/The-Awesome-Q-A-Tool"
                >
                  <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://aniketbumbc.github.io/The-Awesome-Q-A-Tool/"
                >
                  <FontAwesomeIcon icon={faReact} color="white" />
                </a>
              </h1>
            </div>
          </div>
        </div>{' '}
        <div className="card">
          <div className="image">
            <img src={rikcy} alt="RickyImage" loading="lazy" />
          </div>

          <div className="details">
            <div className="center">
              <h1>The Rick and Morty </h1>
              <span>React, Typescript, Material UI, Hooks </span>
              <h1>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/aniketbumbc/The-Rick-and-Morty-API"
                >
                  <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://aniketbumbc.github.io/The-Rick-and-Morty-API/"
                >
                  <FontAwesomeIcon icon={faReact} color="white" />
                </a>
              </h1>
            </div>
          </div>
        </div>{' '}
        <div className="card">
          <div className="image">
            <img src={toDoList} alt="toDoList" loading="lazy" />
          </div>

          <div className="details">
            <div className="center">
              <h1>React To Do List </h1>
              <span>React, Java Script, Css, Redux </span>
              <h1>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/aniketbumbc/React-todo-list/"
                >
                  <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://aniketbumbc.github.io/React-todo-list/"
                >
                  <FontAwesomeIcon icon={faReact} color="white" />
                </a>
              </h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={countrySearch} alt="Searchimage" loading="lazy" />
          </div>

          <div className="details">
            <div className="center">
              <h1>Search Country </h1>
              <span>React, React Testing Library, Scss </span>
              <h1>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/aniketbumbc/search-you-country"
                >
                  <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://aniketbumbc.github.io/search-you-country"
                >
                  <FontAwesomeIcon icon={faReact} color="white" />
                </a>
              </h1>
            </div>
          </div>
        </div>{' '}
        <div className="card">
          <div className="image">
            <img src={reduxImage} alt="reactLogoImage" loading="lazy" />
          </div>

          <div className="details">
            <div className="center">
              <h1>User Registration </h1>
              <span>React, Typescript, Scss, Redux </span>
              <h1>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/aniketbumbc/user-registration"
                >
                  <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://aniketbumbc.github.io/user-registration/"
                >
                  <FontAwesomeIcon icon={faReact} color="white" />
                </a>
              </h1>
            </div>
          </div>
        </div>{' '}
        <div className="card">
          <div className="image">
            <img src={unibet} alt="reactLogoImage" loading="lazy" />
          </div>
          <div className="details">
            <div className="center">
              <h1>Unibet </h1>
              <span>React, Typescript, React testing library </span>
              <h1>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/aniketbumbc/Unibet"
                >
                  <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
                <a
                  className="code-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://aniketbumbc.github.io/Unibet/"
                >
                  <FontAwesomeIcon icon={faReact} color="white" />
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="test"></div>
    </>
  );
};

export default ShowCodeSkill;
