import React from "react";
import { Row, Col } from "antd";
import content1 from "../img/content1.png";
import content2 from "../img/content2.png";
import content3 from "../img/content3.png";
import content4 from "../img/content4.png";
import content5 from "../img/content6.png";
import contant6 from "../img/content7.png";
import contant7 from "../img/contant8.png";
import contant8 from "../img/contant9.png";
import playstore from "../img/Group7127.png";
import bharat from "../img/bharat.png";
import five1 from "../img/five1.svg";
import five2 from "../img/five2.svg";
import five3 from "../img/five3.svg";
import five4 from "../img/five4.svg";
import five5 from "../img/five5.svg";
import "./content.css";

const Content = () => {
  const data = [
    {
      title: "Create ABHA",
      img: five1,
    },
    {
      title: "Create ABHA",
      img: five3,
    },
    {
      title: "Create ABHA",
      img: five4,
    },
  ];

  const data2 = [
    {
      title: "Manage consent",
      img: five4,
    },
    {
      title: "Manage consen",
      img: five5,
    },
    {
      title: "Manage consen",
      img: five2,
    },
  ];
  return (
    <div className="mt">
      <div className="content-about">
        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24} md={12} lg={16}>
            <h2>Health ID</h2>
            <p>
              Under the mission, individuals are suggested to Create health ID
              to standardize the process of identification across healthcare
              providers. To issue UHID (Universal Health ID), the system
              collects certain basic details of the individual, including
              demographic, location, family/relationship, and contact details.
              <br />
              <br />
              The Health ID will uniquely identify individuals, authenticating
              them, and sharing their health records (only with the informed
              consent) with multiple healthcare systems and various stakeholders
            </p>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div className="image-container-content">
              <img src={content1} alt="img" className="image-content" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="content-about-second">
        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24} md={12} lg={8}>
            <div className="image-container-content">
              <img src={content2} alt="img" className="image-content" />
            </div>
          </Col>
          <Col xs={24} md={12} lg={16}>
            <h2>Healthcare Professionals Registry (HPR)</h2>
            <p>
              Under the mission, individuals are suggested to Create health ID
              to standardize the process of identification across healthcare
              providers. To issue UHID (Universal Health ID), the system
              collects certain basic details of the individual, including
              demographic, location, family/relationship, and contact details.
              <br />
              <br />
              The Health ID will uniquely identify individuals, authenticating
              them, and sharing their health records (only with the informed
              consent) with multiple healthcare systems and various stakeholders
            </p>
          </Col>
        </Row>
      </div>
      <div className="content-third">
        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24} md={12} lg={16}>
            <h2>Health Facility Registry (HFR)</h2>
            <p>
              Under the mission, individuals are suggested to Create health ID
              to standardize the process of identification across healthcare
              providers. To issue UHID (Universal Health ID), the system
              collects certain basic details of the individual, including
              demographic, location, family/relationship, and contact details.
              <br />
              <br />
              The Health ID will uniquely identify individuals, authenticating
              them, and sharing their health records (only with the informed
              consent) with multiple healthcare systems and various stakeholders
            </p>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div className="image-container-content">
              <img src={content3} alt="img" className="image-content" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="content-about-second">
        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24} md={12} lg={8}>
            <div className="image-container-content">
              <img src={content4} alt="img" className="image-content" />
            </div>
          </Col>
          <Col xs={24} md={12} lg={16}>
            <h2>Health Records (PHR)</h2>
            <p>
              Under the mission, individuals are suggested to Create health ID
              to standardize the process of identification across healthcare
              providers. To issue UHID (Universal Health ID), the system
              collects certain basic details of the individual, including
              demographic, location, family/relationship, and contact details.
              <br />
              <br />
              The Health ID will uniquely identify individuals, authenticating
              them, and sharing their health records (only with the informed
              consent) with multiple healthcare systems and various stakeholders
            </p>
          </Col>
        </Row>
      </div>
      <div className="content-five">
        <h1>content-fives we provide</h1>
        <Row className="content-five-row">
          <Col span={12}>
            {data.map((item, index) => (
              <div className="all-content-five">
                <div className="content-five-circle">
                  <img src={item.img} alt="" />
                </div>
                <p>{item.title}</p>
              </div>
            ))}
          </Col>
          <Col span={12}>
            {data2.map((item, index) => (
              <div className="all-content-five">
                <div className="content-five-circle">
                  <img src={item.img} alt="" />
                </div>
                <p>{item.title}</p>
              </div>
            ))}
          </Col>
        </Row>
      </div>
      <div className="content-about-second">
        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24} md={12} lg={16} className="national-health">
            <Col xs={24} md={12} lg={8}>
              <p>Approved by</p>
              <img src={bharat} alt="img" className="bharat-image-content" />
              <div className=""></div>
            </Col>
            <div className="line"></div>
            <Col xs={24} md={12} lg={10} className="">
              <h2>Create ABHA</h2>
              <p className="line-hight">
                Be part of Ayushman Bharat Digital Mission (ABDM) and start your
                digital health journey.
              </p>
              <p className="font-six">DOWNLOAD V CARE APP</p>
              <img src={playstore} className="download-app" alt="" />
            </Col>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <div className="image-container-content">
              <img
                src={content5}
                alt="img"
                className="national-health-image-content"
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="content-third">
        <Row className="content-six-heading">
          <h2>The Future of Health Care in India</h2>
          <p>
            Ayushman Bharat Digital Mission is promising and expected to
            significantly improve the effectiveness,
            <br /> efficiency, and transparency of health service delivery
            overall.
          </p>
        </Row>
        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24} md={12} lg={16}>
            <h2>Health Facility Registry (HFR)</h2>
            <p>
              Under the mission, individuals are suggested to Create health ID
              to standardize the process of identification across healthcare
              providers. To issue UHID (Universal Health ID), the system
              collects certain basic details of the individual, including
              demographic, location, family/relationship, and contact details.
              <br />
              <br />
              The Health ID will uniquely identify individuals, authenticating
              them, and sharing their health records (only with the informed
              consent) with multiple healthcare systems and various stakeholders
            </p>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div className="image-container-content">
              <img src={contant6} alt="img" className="image-content-six" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="content-about-second">
        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24} md={12} lg={8}>
            <div className="image-container-content">
              <img src={contant7} alt="img" className="image-content" />
            </div>
          </Col>
          <Col xs={24} md={12} lg={16}>
            <h2>Better access to patient’s medical history</h2>
            <p>
              Under the mission, individuals are suggested to Create health ID
              to standardize the process of identification across healthcare
              providers. To issue UHID (Universal Health ID), the system
              collects certain basic details of the individual, including
              demographic, location, family/relationship, and contact details.
              <br />
              <br />
              The Health ID will uniquely identify individuals, authenticating
              them, and sharing their health records (only with the informed
              consent) with multiple healthcare systems and various stakeholders
            </p>
          </Col>
        </Row>
      </div>
      <div className="content-third">
        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24} md={12} lg={16}>
            <h2>Better access to data to take an informed decision</h2>
            <p>
              Under the mission, individuals are suggested to Create health ID
              to standardize the process of identification across healthcare
              providers. To issue UHID (Universal Health ID), the system
              collects certain basic details of the individual, including
              demographic, location, family/relationship, and contact details.
              <br />
              <br />
              The Health ID will uniquely identify individuals, authenticating
              them, and sharing their health records (only with the informed
              consent) with multiple healthcare systems and various stakeholders
            </p>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div className="image-container-content">
              <img src={contant8} alt="img" className="image-content-last" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Content;
