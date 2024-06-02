import React from 'react';
import { Collapse, Typography } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import './contain.css';

const { Title, Text } = Typography;
const { Panel } = Collapse;

const customExpandIcon = ({ isActive }) => isActive ? <MinusOutlined /> : <PlusOutlined />;

const FAQPage = () => {
  return (
    <div className="faq-container">
      <Title level={2} className="faq-title">Frequently Asked Questions</Title>
      <Collapse
        bordered={false}
        expandIcon={customExpandIcon}
        className="faq-collapse"
      >
        <Panel header="Where do classes meet?" key="1" className="faq-panel">
          <Text>Most classes take place at the church, but depending on the type of class you’re taking you maybe with different teachers. We’ll clarify when and where before you’re officially enrolled!</Text>
        </Panel>
        <Panel header="Is there Childcare available?" key="2" className="faq-panel">
          <Text>Yes, we offer childcare during all class sessions. Our experienced childcare staff ensures a safe and engaging environment for your children.</Text>
        </Panel>
        <Panel header="How often do classes meet?" key="3" className="faq-panel">
          <Text>Classes typically meet once a week. However, some classes may have additional sessions or workshops. Check the class schedule for specific details.</Text>
        </Panel>
        <Panel header="Who teaches classes?" key="4" className="faq-panel">
          <Text>Our classes are taught by a team of experienced and dedicated teachers. Each teacher brings a wealth of knowledge and a passion for teaching to the classroom.</Text>
        </Panel>
      </Collapse>
    </div>
  );
};

export default FAQPage;
