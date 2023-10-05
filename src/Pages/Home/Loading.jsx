import React from "react";
import Loader from "./loader-images/okurmen-logo-loader.png";
import { Space, Spin } from "antd";
import "./Loader.css";

const Loading = () => {
  return (
    <div>
      <div className="spinner">
        <img className="loader-images" src={Loader} alt="" />
      </div>
      <Space size="middle" className="spinn">
        <Spin size="large" style={{ color: "red" }} />
      </Space>
    </div>
  );
};

export default Loading;
