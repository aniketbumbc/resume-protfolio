import React from 'react';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import './index.scss';

const Layout = ({ colorStatus }) => {
  return (
    <>
      <Sidebar colorStatus={colorStatus} />
      <Outlet />
    </>
  );
};

export default Layout;
