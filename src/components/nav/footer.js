import React from 'react';
import { Row, Col } from 'antd';
import './Main.css';

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
          <p className="ripple">Social Media Icons</p>
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
