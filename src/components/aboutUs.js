import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // creates a two-column grid layout
  grid-gap: 10px 20px; // spacing between grid items
  padding: 20px;
  background-color: #f3f4f6; // matching the screenshot background
  color: #333;
  font-family: 'Inter', sans-serif; // assuming Inter is the font you're using throughout
`;

const GridItem = styled.div`
  width: 509px;
  height: 350px;
  position: relative;
  margin-bottom: 10px; // adds space between the grid items if they wrap
`;

const Title = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  color: #FEC75B; // orange color
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 1.28px;
  word-wrap: break-word;
`;

const Content = styled.div`
  width: 502px;
  height: 250px;
  left: 7px;
  top: 53px;
  position: absolute;
  color: #2C2C2E; // dark color
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0.72px;
  word-wrap: break-word;
`;

const TeamMemberProfile = styled.div`
  width: 140px; // Adjust to the size of the team member images
  height: 140px; // Adjust to the size of the team member images
  background-color: #ccc; // Placeholder for an image
  position: relative; // To position the name
`;

const TeamMemberName = styled.div`
  position: absolute;
  width: 100%;
  bottom: -30px; // Adjust as necessary to position below the image
  text-align: center;
  color: #333;
  font-size: 18px;
  font-weight: 800;
`;


const TeamGridItem = styled(GridItem)`
  display: flex;
  justify-content: space-around; // This spreads out the team member divs equally
  align-items: center; // This centers them vertically
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <GridItem>
        <Title>Our Story</Title>
        <Content>Our journey began with a simple belief: aging should be a dignified and graceful process. We are a team of students dedicated to using technology to enhancing the daily lives of seniors.</Content>
      </GridItem>
      <GridItem>
        <Title>Why We Care</Title>
        <Content>Our team shares a personal connection to the cause. Whether it's supporting a parent through retirement or volunteering at community centers, we've seen the difference thoughtful support can make.</Content>
      </GridItem>
      <GridItem>
        <Title>Our Mission</Title>
        <Content>Our mission is to empower seniors to lead healthier, happier lives through technology. We strive to bridge the gap between the fast-paced world of tech and the often overlooked needs of the older generation.</Content>
      </GridItem>
      <TeamGridItem>
      <Title>Meet the Team</Title>
        {/* Team members will go here */}
        <TeamMemberProfile>
          <img src="path_to_lunas_image" alt="Luna" />
          <TeamMemberName>Luna</TeamMemberName>
        </TeamMemberProfile>
        <TeamMemberProfile>
          <img src="path_to_olivers_image" alt="Oliver" />
          <TeamMemberName>Oliver</TeamMemberName>
        </TeamMemberProfile>
        {/* Add more team members as needed */}
      </TeamGridItem>
    </AboutContainer>
  );
};

export default AboutUs;
