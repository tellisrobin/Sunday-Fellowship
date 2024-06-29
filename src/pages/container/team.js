import React from "react";
import { Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./contain.css";
import Wayne from "../../assets/WaynePenrod.jpg";
import Peggy from "../../assets/PeggyPenrod.jpg";

const teamMembers = [
  {
    name: "Wayne Penrod",
    title: "Mentor",
    description: `I'm Wayne Penrod, and let me tell you, it's an absolute honor to be part of the Sunday school
    teaching team at Parkview Church of the Nazarene. My heart is filled with gratitude as I reflect
    on the journey that brought me here. 
    My spiritual journey traces back to a pivotal night in July 1973 when my wife, and I made a
    life-altering decision to commit ourselves to Jesus Christ. That night marked the beginning of
    a profound transformation in our lives, one that continues to resonate us to this day.
    My life has been dedicated to supporting the spiritual growth of children, youth, and young
    adults. There's nothing quite like witnessing the beautiful journey of these young souls as they
    navigate their relationship with God. It's been an absolute privilege and one of the greatest
    blessings of my life.
    My involvement at Church of the Nazarene has been foundational in my life, defining my
    purpose and bringing profound meaning to every moment. As the President of Nazarene Youth
    International for several years and through various other positions within the church, I've had
    the pleasure of serving and guiding our community with unwavering dedication.
    Beyond my spiritual endeavours, my professional path has been diverse. From business
    ventures to serving in the armed forces, each experience has enriched my life and provided
    valuable lessons.
    Looking ahead, I am filled with eagerness to continue my service at Parkview. I am committed
    to doing everything in my power to encourage and support the next generation in their walk
    with Christ. After all, there's nothing more fulfilling than being a guiding light for those who
    are embarking on their own spiritual journey.`,
    image: Wayne,
  },
  {
    name: "Peggy Penrod",
    title: "Mentor",
    description: `Hello, I'm Peggy Penrod, and I am overjoyed to be part of the Sunday school teaching team at
      Parkview Church of the Nazarene in Kettering. My spiritual journey took a transformative turn
      during the Steven Marshly Revival in Belmont. That moment was profoundly special, as my
      family and I accepted Jesus into our hearts together, forever changing our lives.
      For the past five decades, I've had the incredible duty of mentoring children, youth, and young
      adults on their spiritual journeys. It has been a joyous and blessed experience to witness so
      many lives touched and transformed by God's love. I started teaching teenagers about God, and
      seeing their faith grow has been truly rewarding.
      In my journey, I've found that God's love is a constant presence, guiding and sustaining us
      through all trials. It is this love that I seek to share with those around me, especially the young
      minds and hearts eager to understand their place in God's plan. Through teaching, I aim to plant
      seeds of faith that will blossom into a deep and abiding relationship with Christ.
      As a Sunday school teacher, I see myself not just as an educator but as a messenger of the
      Gospel, entrusted with the task of spreading God's word to all who will listen. It is a
      responsibility that I do not take lightly, for I understand the profound impact that a single lesson
      can have on a young soul seeking truth and meaning in their life.
      Each Sunday, as I stand before my students, I am reminded of the immense privilege it is to be
      called to this ministry. I am humbled by the opportunity to witness firsthand the transformative
      power of God's love and the beauty of His grace. It is my prayer that I may continue to serve
      faithfully, always seeking to lead others closer to Him who is the true source of all joy and
      peace.
      I am a proud graduate of Wright State University and have been a dedicated member of
      Parkview Church of the Nazarene for many years. Beyond my work within the church, I am
      also a businesswoman, which has given me a unique perspective on balancing faith and
      professional life.
      Thank you for allowing me to share a glimpse of my journey with you. It is my hope that
      together, we may continue to grow in faith and love, drawing ever closer to God and His eternal
      kingdom.
      `,
    image: Peggy,
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-header">
        <h1>OUR TEAM</h1>
        <p>
          We believe that we are better together. Our staff has a blast serving
          Jesus, His people, and each other. Let us know how we can help you
          grow in your relationships, develop your gifts, and find success in
          your life.
        </p>
      </div>
      {teamMembers.map((member, index) => (
        <Row key={index} className="team-member" justify="center">
          <Col xs={24} sm={6} md={4} className="team-member-icon">
            {/* <UserOutlined style={{ fontSize: "80px", color: "#003366" }} /> */}
            <img src={member.image} alt="Mentor" className="mentor-image" />
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
