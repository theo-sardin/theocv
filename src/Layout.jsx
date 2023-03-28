import React from "react";
import {Outlet} from "react-router-dom";
import CvAppBar from "./CvAppBar";

const Layout = () => {
    return (
      <>
        <CvAppBar />
        <Outlet />
      </>
    );
  };
  
  export default Layout;