import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import contactUs from '../../assets/images/contact me.gif';
import { Roll } from 'react-awesome-reveal';
import './index.scss';
import { contactMe } from '../../constant';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);
  return (
    <>
      <div className="container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactMe}
              idx={15}
            />
          </h1>
          <p className="contact-section">Let's get in touch! </p>
          <Roll>
            <p className="contact-section primary-color">
              aniketfreelance21@gmail.com 📩
            </p>
            <a
              className="navigation-btn"
              href="https://calendly.com/aniket-umbc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Online Meeting
            </a>
          </Roll>
          <p className="info-section">
            Always down to collaborate. Always up for new opportunities. <br />
            I'm hoping to continue further my work into designing and developing{' '}
            <br />
            digital products 💻.
            <br />
          </p>
          <p className="site-info">
            This site is self hand-crafted, with React and Scss.
          </p>

          <p className="copyright-info">Copyright © Bunny Bee.</p>
        </div>

        <div className="image-top">
          <img className="image-blob" src={contactUs} alt="aniket-b" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
