import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import './contain.css';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <Row justify="center" align="middle">
        <Col xs={24} sm={24} md={12} lg={12}>
          <h1>Contact Us</h1>
          <p>We would love to hear from you!</p>
          <Form layout="vertical">
            <Form.Item label="Name">
              <Input placeholder="Your name" />
            </Form.Item>
            <Form.Item label="Company">
              <Input placeholder="Your company name" />
            </Form.Item>
            <Form.Item label="Email address">
              <Input placeholder="Your email address" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" block>
                Contact
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={0} sm={0} md={12} lg={12}>
          <div className="contact-image">
            <MailOutlined style={{ fontSize: '200px', color: '#003366' }} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;
