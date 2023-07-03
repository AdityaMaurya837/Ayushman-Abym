import React from "react";
import { Row, Col } from "antd";
import modi from "../img/pm-modi.png";
import "./about.css";

const AboutAyushman = () => {
  return (
    <div className="about-ayushman">
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} md={12} lg={16}>
          <h2>About Ayushman Bharat Digital Mission</h2>
          <p>
            With the objective of strengthening the accessibility and equity of
            health services, the Ayushman Bharat Digital Mission was launched
            through video conferencing on 27th September 2021. The mission will
            leverage IT and its associated technologies to support existing
            health systems with a 'citizen-centric' approach.
            <br />
            <br />
            The vision of ABDM is to create a digital health ecosystem for the
            nation which can support universal health coverage in an efficient,
            accessible, inclusive, affordable, timely, and safe manner. The
            mission is expected to improve the efficiency, effectiveness, and
            transparency of health services.
          </p>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <div className="image-container">
            <img src={modi} alt="PM Modi" className="image" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutAyushman;
