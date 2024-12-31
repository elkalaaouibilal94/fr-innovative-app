import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import FloatingContactButtons from './FloatingContactButtons';
import MobileContactBar from './mobile/MobileContactBar';
import CookieConsent from './cookie/CookieConsent';

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
      <FloatingContactButtons />
      <MobileContactBar />
      <CookieConsent />
    </div>
  );
};

export default Layout;