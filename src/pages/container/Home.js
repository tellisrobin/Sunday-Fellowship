import React from 'react';
import { Row, Col, Button, Collapse } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import Image from '../../assets/img.webp';
import './home.css';

const { Panel } = Collapse;

const Home = () => {
  const customExpandIcon = ({ isActive }) => isActive ? <MinusOutlined /> : <PlusOutlined />;

  return (
    <main className="content">
      <Row>
        <Col span={24}>
          <div className="hero-section">
            <div className="hero-image-container">
              <img src={Image} alt="Hero" className="hero-image" />
            </div>
          </div>
          <div className="welcome-section">
            <h1>WELCOME TO PSALM 46</h1>
            <p>Finding Peace and Strength in Faith</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada nisi. Praesent diam lorem, convallis sit amet tellus sed, luctus euismod libero. Quisque ac lorem velit.</p>
            <Button type="primary" className="schedule-button">OUR CLASSES SCHEDULE</Button>
          </div>
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <Collapse
              bordered={false}
              expandIcon={customExpandIcon}
              className="faq-collapse"
            >
              <Panel header="Where do classes meet?" key="1" className="faq-panel">
                <p>Most classes take place at the church, but depending on the type of class you’re taking you maybe with different teachers. We’ll clarify when and where before you’re officially enrolled!</p>
              </Panel>
              <Panel header="Is there Childcare available?" key="2" className="faq-panel">
                <p>Yes, we offer childcare during all class sessions. Our experienced childcare staff ensures a safe and engaging environment for your children.</p>
              </Panel>
              <Panel header="How often do classes meet?" key="3" className="faq-panel">
                <p>Classes typically meet once a week. However, some classes may have additional sessions or workshops. Check the class schedule for specific details.</p>
              </Panel>
              <Panel header="Who teaches classes?" key="4" className="faq-panel">
                <p>Our classes are taught by a team of experienced and dedicated teachers. Each teacher brings a wealth of knowledge and a passion for teaching to the classroom.</p>
              </Panel>
            </Collapse>
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default Home;
