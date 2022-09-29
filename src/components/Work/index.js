import { useState, useEffect } from 'react';
import { nameArray, skills, techStack, workHistory } from '../../constant';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="main-container">
        <h1 className="header">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <section className="section-page">
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skills}
              idx={10}
            />
          </h2>
          <ul className="qualifications-list">
            <li>
              ✔️ 5 Years experience with front & backend development in Java
              Script.
            </li>
            <li>✔️ Extensive knowledge in API & Database Design.</li>
            <li>
              ✔️ Experienced content creator on YouTube & community leader.
            </li>
            <li>✔️ 7 Years experience with running Adwords campaigns & SEO</li>
          </ul>

          <h2>
            {' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={techStack}
              idx={10}
            />
          </h2>
          <div className="wrapper-techstack-items">
            <div className="card-techstack">
              <span>Python, JavaScript, NodeJS</span>
            </div>
            <div className="card-techstack">
              <span>Django, Express, Flask, FastAPI</span>
            </div>
            <div className="card-techstack">
              <span>React, Next JS</span>
            </div>
            <div className="card-techstack">
              <span>Postgres, MongoDB, MySQL</span>
            </div>
          </div>
        </section>
        <div className="work-history-wrapper">
          <div></div>
          <section className="section-page">
            <h2>
              {' '}
              <AnimatedLetters
                letterClass={letterClass}
                strArray={workHistory}
                idx={15}
              />
            </h2>

            <div className="line-break"></div>
            <div className="card-work-history">
              <strong>🚧 DEVELOPER ADVOCATE | AGORA.IO</strong>
              <p>11/2021 - Present</p>
              <p>
                Worked on making Agora’s Web Based SDK more accessible through
                video tutorials, articles, demo projects and event based
                training. Also building out React UI components & leading a team
                to re-design Agora’s documentation and api reference.
              </p>
              <ul>
                <li>
                  Doubled Web SDK’s monthly usage minutes from 15 million to 30
                  million minutes within my first 4 months
                </li>
                <li>
                  Produced educational video content which resulted in 300k+
                  views on youtube
                </li>
                <li>
                  Produced SEO campaigns and content to gain market share for
                  related keywords.
                </li>
              </ul>
            </div>

            <div className="line-break"></div>

            <div className="card-work-history">
              <strong>🚧 INSTRUCTOR | YOUTUBE, UDEMY, TEACHABLE</strong>
              <p>11/2019 - Present</p>
              <p>
                Produced content showcasing new tech, tutorials & interviews
                with top developers.
              </p>
              <ul>
                <li>166,000+ Youtube Subscribers</li>
                <li>30,000 course copies sold</li>
                <li>12+ Million views on Youtube</li>
                <li>
                  Made regular contributions to Traversy Medias youtube channel
                  (1.9m Subscribers)
                </li>
                <li>
                  Tutorial videos included projects such as social networks,
                  Ecommerce, real time video, stripe & paypal integrations and
                  more{' '}
                </li>
              </ul>
            </div>

            <div className="line-break"></div>

            <div className="card-work-history">
              <strong>🚧 SENIOR DEVELOPER | FOI LABS</strong>
              <p>10/2017 - 10/2019</p>
              <p>
                Designed and developed a laboratory management system. My system
                provided an interface for lab technicians and customers to view
                and track data from samples tested in the lab.
              </p>
              <ul>
                <li>
                  Designed prototype & pitched original idea for new lab
                  management system (LIMS)
                </li>
                <li>
                  Built entire code base and brought version 1 of LIMS system to
                  market as a solo developer
                </li>
                <li>
                  Onboarded and trained customers (Webinars & Conferences)
                </li>
                <li>
                  Managed a small team of developers in expansion of LIMS system
                </li>
              </ul>
            </div>

            <div className="line-break"></div>

            <div className="card-work-history">
              <strong>🚧 DIGITAL MARKETER | UNIFIVE DIGITAL</strong>
              <p>2014 - 2017</p>
              <p>
                Started a digital agency building websites and marketing for
                local businesses. Mostly Wordpress sites with small
                modifications to themes.
              </p>
              <ul>
                <li>
                  Organized SEO & SEM campaigns on a local and global scale.
                </li>
                <li>
                  Saved a customer $110k a year by reducing Adwords CPC cost
                  with optimization
                </li>
                <li>
                  70 + websites built with my small team of developers and
                  freelancers
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Work;
