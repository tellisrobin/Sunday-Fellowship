import React from "react";
import { Collapse, Typography } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import "./contain.css";
import Image from "../../assets/WhoWeAreBanner.jpg";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const customExpandIcon = ({ isActive }) =>
  isActive ? <MinusOutlined /> : <PlusOutlined />;

const FAQPage = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-image-container">
          <img src={Image} alt="Hero" className="hero-image" />
        </div>
      </div>
      <div className="faq-container">
        <Title level={2} className="faq-title">
          Frequently Asked Questions
        </Title>
        <Collapse
          bordered={false}
          expandIcon={customExpandIcon}
          className="faq-collapse"
        >
          <Panel
            header="Where do the gatherings take place?"
            key="1"
            className="faq-panel"
          >
            <p>
              We meet right here at the church! It makes things convenient and
              allows us to create a warm, familiar space for everyone.
            </p>
          </Panel>
          <Panel
            header="How often can I connect with others?"
            key="2"
            className="faq-panel"
          >
            <p>
              We have gatherings twice a week: on Wednesdays and Sundays. This
              allows you to choose the schedule that best fits your life.
              Currently, our gatherings are held in person at the church, but
              we're always exploring ways to expanding and may offer online
              options in the future.
            </p>
          </Panel>
          <Panel
            header="What about activities and events?"
            key="3"
            className="faq-panel"
          >
            <p>
              Beyond our regular gatherings, we offer a variety of fun and
              engaging activities after church on most Sundays! These can be
              anything from cooking out, fishing, going out for lunch, meeting
              at a fun place etc. It's a great way to connect with others on a
              deeper level and explore your faith in a more social setting. Keep
              an eye out for announcements on these special events!
            </p>
          </Panel>
          <Panel header="Is childcare available?" key="4" className="faq-panel">
            <p>
              Absolutely! We believe that everyone should be able to nurture
              their spirituality, and that includes parents. We offer childcare
              during our Wednesday and Sunday gatherings so you can focus on
              your own journey without worry.
            </p>
          </Panel>
          <Panel
            header="Can I get a ride for gatherings?"
            key="5"
            className="faq-panel"
          >
            <p>
              On the house! We'll give you a ride to and from the events and
              church, completely FREE.
            </p>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default FAQPage;
