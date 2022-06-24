import LogoTitle from '../../assets/images/logo.png';

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 style={{ marginLeft: '500px' }}>
            Hi, <br /> I'm{' '}
          </h1>
          <img src={LogoTitle} alt="developer" />
        </div>
      </div>
    </>
  );
};

export default Home;
