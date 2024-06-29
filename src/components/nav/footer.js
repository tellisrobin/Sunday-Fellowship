import React from "react";
import { Row, Col } from "antd";
import { FacebookFilled } from "@ant-design/icons";
import { InstagramFilled } from "@ant-design/icons";
import "./Main.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Row justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <h2>Service Times</h2>
          <p>Sundays at 10:45AM, 12:00AM</p>
          <p>In Person & Online Weekly</p>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <h2>Follow Us</h2>
          <div>
            <a
              className="ripple"
              href="https://www.facebook.com/profile.php?id=61560746183925"
              target="blank"
            >
              <FacebookFilled style={{ fontSize: "42px" }} />
            </a>
          </div>
          <div>
            <a
              className="ripple"
              href="https://www.instagram.com/sspsalm46"
              target="blank"
            >
              <InstagramFilled style={{ fontSize: "42px" }} />
            </a>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6}>
          <h2>Contact Us</h2>
          <p className="ripple">(937) 435-1428</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
