import React from 'react';
import { Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './contain.css';

const teamMembers = [
  {
    name: "John Doe",
    title: "CEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada nisi. Praesent diam lorem, convallis sit amet tellus sed, luctus euismod libero. Quisque ac lorem velit."
  },
  {
    name: "Jane Smith",
    title: "CTO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada nisi. Praesent diam lorem, convallis sit amet tellus sed, luctus euismod libero. Quisque ac lorem velit."
  }
];

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-header">
        <h1>OUR TEAM</h1>
        <p>
          We believe that we are better together. Our staff has a blast serving Jesus, His people,
          and each other. Let us know how we can help you grow in your relationships, develop your gifts,
          and find success in your life.
        </p>
      </div>
      {teamMembers.map((member, index) => (
        <Row key={index} className="team-member" justify="center">
          <Col xs={24} sm={6} md={4} className="team-member-icon">
            <UserOutlined style={{ fontSize: '80px', color: '#003366' }} />
          </Col>
          <Col xs={24} sm={18} md={20} className="team-member-info">
            <h2>{member.name}</h2>
            <h3>{member.title}</h3>
            <p>{member.description}</p>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Team;
