import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import WhatsApp from "../whatsApp/WhatsApp";

const Layout = () => {
  return (
    <>
      <Header />

      
        <Outlet />
        <WhatsApp  />
      
        <Footer />
    </>
  );
};

export default Layout;
