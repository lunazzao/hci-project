import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  background-color: #f3f4f6;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Single column grid layout for mobile
  }
`;

const GridItem = styled.div`
  background: #fff; // Assuming you want a white background for the grid items
  padding: 20px;
  margin-bottom: 20px; // Adds space between the grid items if they wrap
`;

const Title = styled.h2`
  color: #fec75b;
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 1.28px;

  @media (max-width: 768px) {
    font-size: 24px; // Smaller font size for mobile
  }
`;

const Content = styled.p`
  color: #2c2c2e;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.72px;

  @media (max-width: 768px) {
    font-size: 16px; // Smaller font size for mobile
  }
`;

const TeamMemberProfile = styled.div`
  text-align: center;
  margin: 10px 0; // Adds top and bottom margin for spacing
`;

const TeamMemberName = styled.h3`
  color: #333;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 16px; // Smaller font size for mobile
  }
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <GridItem>
        <Title>Our Story</Title>
        <Content>
          Our journey began with a simple belief: aging should be a dignified and graceful process. We are a team of students dedicated to using technology to enhance the daily lives of seniors.
        </Content>
      </GridItem>
      <GridItem>
        <Title>Why We Care</Title>
        <Content>
          Our team shares a personal connection to the cause. Whether it's supporting a parent through retirement or volunteering at community centers, we've seen the difference thoughtful support can make.
        </Content>
      </GridItem>
      <GridItem>
        <Title>Our Mission</Title>
        <Content>
          Our mission is to empower seniors to lead healthier, happier lives through technology. We strive to bridge the gap between the fast-paced world of tech and the often overlooked needs of the older generation.
        </Content>
      </GridItem>
      {/* Team Member Profiles would be additional GridItems */}
      <GridItem>
        <Title>Our Team</Title>
        <TeamMemberProfile>
          {/* Include team member image with responsive styles */}
          <TeamMemberName>Luna</TeamMemberName>
          Graphic Design
          <br />
          Programming
        </TeamMemberProfile>
        <TeamMemberProfile>
          {/* Include team member image with responsive styles */}
          <TeamMemberName>Oliver</TeamMemberName>
          Programming
          <br />
          API Integration
        </TeamMemberProfile>
        
      </GridItem>
      
      {/* Additional team members can be added here as new GridItem elements */}
    </AboutContainer>
  );
};

export default AboutUs;
