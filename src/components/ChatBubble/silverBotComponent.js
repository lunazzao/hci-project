import React from 'react';
import styled from 'styled-components';
import messagesData from '../../data/message.json';
import silverBotImage from '../../img/silverBot.png';

// Define a timestamp function to get the current time
const getCurrentTimestamp = () => {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};


const Container = styled.div`
  display: flex;
  flex-direction: column; // Align messages in a column
  gap: 20px; // Add space between each message bubble
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row; // Set direction to row to align items in a line
  justify-content: space-between; // This will push the timestamp to the right
  align-items: center;
  background-color: #FFF8E7;
  border-radius: 22px;
  padding: 16px;
  max-width: 75%;
  box-sizing: border-box;
`;


const ProfileImageContainer = styled.div`
  position: relative;
  margin-right: 20px; 
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #E1E1E1; // Placeholder for border color
  }
`;

const OnlineIndicator = styled.div`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 26px; // Adjust to position correctly
  left: 26px;
  background: #34C759;
  border-radius: 50%;
  border: 2px solid #FFF8E7; // Match the background color
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1; // Allow this container to grow and fill space
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: baseline; // Align the text at the baseline
  gap: 4px; // Space between 'SilverBot' and 'AI Assistant'
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #000;
`;

const Subtitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #555;
`;

const Question = styled.p`
  margin: 4px 0;
  font-size: 20px;
  font-weight: 800;
  color: #333;
`;

const Timestamp = styled.div`
  font-size: 12px;
  color: #666;
  white-space: nowrap; // Prevent the timestamp from wrapping
  margin-left: 12px; // Add some space between the text and the timestamp
`;

const SilverBotComponent = () => {
  // Call getCurrentTimestamp only once to avoid different timestamps on re-render
  const timestamp = getCurrentTimestamp();

  return (
    <Container>
      {messagesData.map((msg) => (
        <MessageContainer key={msg.id}>
          <ProfileImageContainer>
          <img src={silverBotImage} alt="Profile" />
            <OnlineIndicator />
          </ProfileImageContainer>
          <TextContainer>
            <TitleContainer>
              <Title>SliverBot</Title>
              <Subtitle>AI Assistant</Subtitle>
            </TitleContainer>
            <Question>{msg.message}</Question>
          </TextContainer>
          <Timestamp>{timestamp}</Timestamp>
        </MessageContainer>
      ))}
    </Container>
  );
};

export default SilverBotComponent;
