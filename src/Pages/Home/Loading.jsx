import React from "react";
import Loader from "./loader-images/okurmen-logo-loader.png";
import { Space, Spin } from "antd";
import "./Loader.css";

const Loading = () => {
  return (
    // <div className="container">
      <div className="wrapper-loader">

      
      <div className="spinner">
        <img className="loader-images" src={Loader} alt="" />
      <Space size="middle" className="spinn">
        <Spin size="large" />
      </Space>
      </div>
      </div>
    // </div>
  );
};

export default Loading;
