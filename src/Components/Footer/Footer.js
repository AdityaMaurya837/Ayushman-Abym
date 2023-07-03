import React from "react";
import { Row, Col } from "antd";
import "./footer.css";
import map from "../img/map.svg";
import phone from "../img/phone.svg";
import mail from "../img/mail.svg";

const Footer = () => {
  return (
    <div className="footer">
      <Row justify="center">
        <Col xs={24} sm={12} md={6}>
          <h3>COMPANY INFO</h3>
          <p>About Us</p>
          <p>Portfolio</p>
          <p>Contact Us</p>
          <p>Career</p>
          <p>Blog</p>
          <p>Privacy Policy</p>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h3>OUR SERVICES</h3>
          <p>Mobile App Development</p>
          <p>Android Apps</p>
          <p>iOS Apps</p>
          <p>Website Development</p>
          <p>Digital Marketing</p>
          <p>E-commerce</p>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h3>OUR PRODUCTS</h3>
          <p>Healthcare Solutions</p>
          <p>College Management</p>
          <p>Salon Services Portal</p>
          <p>Cab Rental Systems</p>
          <p>Marketing Solutions</p>
          <p>Education & Job Portals</p>
        </Col>
        <Col xs={24} sm={12} md={6} className="icon">
          <h3>CONTACT US</h3>
          <div className="icon-content">
            <img src={map} alt="" />
            <p>
              Office Address: 6th Floor, C-56/11, Sec-62 Noida, India, Pin:
              201301
            </p>
          </div>
          <div className="icon-content">
            <img src={phone} alt="" />
            <p>+91-920-512-8946</p>
          </div>
          <div className="icon-content">
            <img src={mail} alt="" />
            <p>info@abym.in</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
