import React from "react";
import { Layout, Card, Row, Col, Typography, Button } from "antd";
import "./contain.css";
import Image from "../../assets/EventsPageBanner.jpg";

const { Content } = Layout;
const { Title, Text } = Typography;

const events = [
  {
    title: "Graduation",
    date: "June",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada nisi. Praesent diam lorem, convallis sit amet tellus sed, luctus euismod libero. Quisque ac lorem velit.",
  },
  {
    title: "Summer",
    date: "June",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada nisi. Praesent diam lorem, convallis sit amet tellus sed, luctus euismod libero. Quisque ac lorem velit.",
  },
  {
    title: "Good Friday",
    date: "June",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada nisi. Praesent diam lorem, convallis sit amet tellus sed, luctus euismod libero. Quisque ac lorem velit.",
  },
  // Add more events as needed
];

const EventsPage = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <div className="hero-section">
          <div className="hero-image-container">
            <img src={Image} alt="Hero" className="hero-image" />
          </div>
        </div>
        <div className="site-layout-content">
          <Title>All Upcoming Events</Title>
          <Row gutter={[16, 16]}>
            {events.map((event, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  hoverable
                  cover={<div className="event-photo">PHOTO</div>}
                >
                  <Title level={4}>{event.title}</Title>
                  <Text type="secondary">Date: {event.date}</Text>
                  <p>{event.description}</p>
                  <Button type="primary">Learn More</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default EventsPage;
