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
          </Roll>
          <p className="info-section">
            Always down to collaborate when, I get an opportunity. <br />
            I'm hoping to further my career by designing and development <br />
            digital product 💻.
            <br />
          </p>
          <p className="site-info">
            This site is hand-crafted, with ReactJS along with Scss.
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
