import React from "react";
import "./features.css";
import { Row, Col } from "antd";
import check from "../img/check.svg";
import f1 from "../img/f1.svg";
import f2 from "../img/f2.svg";
import f3 from "../img/f3.svg";
import f4 from "../img/f4.svg";
import f5 from "../img/f5.svg";
import f6 from "../img/f6.svg";

const Features = () => {
  const data = [
    {
      ftitle: "ABHA Creation via AADHAAR",
      title: "ABHA Creation via AADHAAR",
      img: check,
      fimg: f1,
    },
    {
      title: "ABHA Creation via AADHAAR",
      ftitle: "ABHA Creation via AADHAAR",
      img: check,
      fimg: f2,
    },
    {
      title: "ABHA Creation via AADHAAR",
      ftitle: "ABHA Creation via AADHAAR",
      img: check,
      fimg: f3,
    },
    {
      // title: "ABHA Creation via AADHAAR",
      ftitle: "ABHA Creation via AADHAAR",
      fimg: f4,
    },
    {
      ftitle: "ABHA Creation via AADHAAR",
      fimg: f5,
    },
    {
      ftitle: "ABHA Creation via AADHAAR",
      fimg: f6,
    },
  ];
  return (
    <>
      <div className="feature">
        <h1>Features we provide</h1>
        <Row className="feature-row">
          <Col span={12}>
            {data.map((item, index) => (
              <div className="all-feature">
                <img src={item.img} alt="" />
                <p>{item.title}</p>
              </div>
            ))}
          </Col>
          <Col span={12}>
            {data.map((item, index) => (
              <div className="all-feature">
                <img src={item.img} alt="" />
                <p>{item.title}</p>
              </div>
            ))}
          </Col>
        </Row>
      </div>
      <div className="feature-app">
        <Row>
          {data.map((item, index) => (
            <Col span={12}>
              <div className="circle">
                <img src={item.fimg} alt="" />
              </div>
              <div className="bgOrange">
                <p>{item.ftitle}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Features;
