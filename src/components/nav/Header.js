import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Main.css'; // Import the CSS file

function Main() {
  return (
    <>
      <Row align="middle" justify="space-between" className='header'>
        <Col xs={24} sm={8} md={6} lg={4}>
          <NavLink className="nav-link" activeClassName="active" exact to="/">
            <p className='logo'>Logo</p>
          </NavLink>
        </Col>
        <Col xs={0} sm={16} md={14} lg={12}>
          <div className="nav-links-container">
            <NavLink className="nav-link" activeClassName="active" exact to="/team">
              Our Team
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" exact to="/who-we-are">
              Who We Are
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" exact to="/events">
              Events
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" exact to="/contact-us">
              Contact us
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" exact to="/">
              <p className='sidebar'>
              <MenuOutlined />
              </p>
            
          </NavLink>
          </div>
        </Col>
        
      </Row>
    </>
  );
}

export default Main;
