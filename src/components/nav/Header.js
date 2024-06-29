import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";
import { Col, Row, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./Main.css"; // Import the CSS file
import Logo from "../../assets/Psalm46-Logo.png";

const Header = () => {
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
          <NavLink className="nav-link ripple" exact to="/" aria-current="page">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            {/* <p className="logo">Logo</p> */}
          </NavLink>
        </Col>
        <Col xs={6} sm={0} md={0} lg={0} className="drawer-icon-container">
          <p className="sidebar ripple" onClick={showDrawer}>
            <MenuOutlined />
          </p>
        </Col>
        <Col xs={0} sm={16} md={14} lg={12}>
          <div className="nav-links-container">
            <NavLink
              className="nav-link ripple"
              exact
              to="/team"
              aria-current="page"
            >
              Our Team
            </NavLink>
            <NavLink
              className="nav-link ripple"
              exact
              to="/who-we-are"
              aria-current="page"
            >
              Who We Are
            </NavLink>
            <NavLink
              className="nav-link ripple"
              exact
              to="/events"
              aria-current="page"
            >
              Events
            </NavLink>
            <NavLink
              className="nav-link ripple"
              exact
              to="/contact-us"
              aria-current="page"
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
          className="nav-link ripple"
          exact
          to="/team"
          onClick={onClose}
          aria-current="page"
        >
          Our Team
        </NavLink>
        <NavLink
          className="nav-link ripple"
          exact
          to="/who-we-are"
          onClick={onClose}
          aria-current="page"
        >
          Who We Are
        </NavLink>
        <NavLink
          className="nav-link ripple"
          exact
          to="/events"
          onClick={onClose}
          aria-current="page"
        >
          Events
        </NavLink>
        <NavLink
          className="nav-link ripple"
          exact
          to="/contact-us"
          onClick={onClose}
          aria-current="page"
        >
          Contact us
        </NavLink>
      </Drawer>
    </>
  );
};

export default Header;
