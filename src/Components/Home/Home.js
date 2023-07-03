import React from "react";
import { Row, Col } from "antd";
import playstore from "../img/Group7127.png";
import homeImg from "../img/mobile2.png";
import img1 from "../img/Group 7137.svg";
import img2 from "../img/Group 7138.svg";
import img3 from "../img/Group 7141.svg";
import "./home.css";

const Home = () => {
  const gov_Img = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
  ];

  return (
    // <div className="home">
    <Row justify="center" align="middle" className="home-row">
      <Col xs={24} md={12} className="home-content">
        <h3>
          Developing the backbone necessary to support the integrated
          <br />
          digital health infrastructure for India
        </h3>
        <h2>
          Simplifying the
          <br />
          integration of ABDM
        </h2>
        <img src={playstore} alt="" />
        <p>Download Sample App</p>
      </Col>
      <Col xs={24} md={6} className="home-gov-img">
        {gov_Img.map((item, index) => (
          <img key={index} src={item.img} alt="" />
        ))}
      </Col>
      <Col xs={24} md={6} className="home-img">
        <img src={homeImg} alt="" />
      </Col>
    </Row>
    // </div>
  );
};

export default Home;
