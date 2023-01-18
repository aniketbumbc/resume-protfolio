import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          detectRetina: true,
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onDiv: {
                elementId: 'repulse-div',
                enable: false,
                mode: 'repulse',
              },
              onHover: {
                enable: true,
                mode: 'bubble',
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 40,
                duration: 2,
                opacity: 8,
                size: 6,
                speed: 3,
              },
              connect: {
                distance: 80,
                lineLinked: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              slow: {
                active: false,
                radius: 0,
                factor: 1,
              },
            },
          },
          particles: {
            color: {
              value: '#9a1750',
            },
            lineLinked: {
              blink: true,
              color: 'rgb(40, 117, 136);',
              consent: false,
              distance: 30,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              bounce: true,
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              limit: 0,
              value: 200,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 2,
                sync: false,
              },
              random: false,
              value: 0.4,
            },
            shape: {
              type: 'star',
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false,
              },
              random: true,
              value: 3,
            },
          },
          polygon: {
            draw: {
              enable: true,
              lineColor: 'black',
              lineWidth: 1.5,
            },
            enable: true,
            move: {
              radius: 10,
            },
            inline: {
              arrangement: 'equidistant',
            },
            scale: 0.5,
            type: 'inline',
          },
          background: {
            color: '#F0FFFF',
            image: '',
            position: '50% 50%',
            repeat: 'no-repeat',
            size: 'cover',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work" element={<Work />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
