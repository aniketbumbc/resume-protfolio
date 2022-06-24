import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import './index.scss';

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Layout;
