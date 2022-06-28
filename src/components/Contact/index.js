import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { contactMe } from '../../constant';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactMe}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
