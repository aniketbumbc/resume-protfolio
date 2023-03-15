import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoBunny from '../../assets/images/logo.png';
import LogoName from '../../assets/images/logo_name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faHome,
  faUser,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { Zoom } from 'react-awesome-reveal';

const Sidebar = ({ colorStatus }) => {
  return (
    <>
      <div className={colorStatus ? 'nav-bar bgColor' : 'nav-bar bgColorWhite'}>
        <Zoom direction="right">
          <Link className="logo" to="/">
            <img src={LogoBunny} alt="logo" />
            <img className="sub-logo" src={LogoName} alt="logo Name" />
          </Link>
        </Zoom>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="work-link"
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/aniket-b-3750051a7/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/aniketbumbc"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/andyjak78"
            >
              <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
              <FontAwesomeIcon icon={faDribbble} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
