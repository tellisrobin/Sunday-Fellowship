import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";
import { Col, Row, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./Main.css"; // Import the CSS file
import Logo from "../../assets/Psalm46-Logo.jpg";

function Main() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <Row align="middle" justify="space-between" className="header">
        <Col xs={18} sm={8} md={6} lg={4}>
          <NavLink className="nav-link" activeClassName="active" exact to="/">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            {/* <p className="logo">Logo</p> */}
          </NavLink>
        </Col>
        <Col xs={6} sm={0} md={0} lg={0} className="drawer-icon-container">
          <p className="sidebar" onClick={showDrawer}>
            <MenuOutlined />
          </p>
        </Col>
        <Col xs={0} sm={16} md={14} lg={12}>
          <div className="nav-links-container">
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/team"
            >
              Our Team
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/who-we-are"
            >
              Who We Are
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/events"
            >
              Events
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/contact-us"
            >
              Contact us
            </NavLink>
          </div>
        </Col>
      </Row>
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={drawerVisible}
      >
        <NavLink
          className="nav-link"
          activeClassName="active"
          exact
          to="/team"
          onClick={onClose}
        >
          Our Team
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="active"
          exact
          to="/who-we-are"
          onClick={onClose}
        >
          Who We Are
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="active"
          exact
          to="/events"
          onClick={onClose}
        >
          Events
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="active"
          exact
          to="/contact-us"
          onClick={onClose}
        >
          Contact us
        </NavLink>
      </Drawer>
    </>
  );
}

export default Main;
