import React from 'react';
import styled from 'styled-components';
import messagesData from '../../data/message.json';
import silverBotImage from '../../img/silverBot2.png';

const getCurrentTimestamp = () => {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%; // Ensure it fills the container width
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF8E7;
  border-radius: 22px;
  padding: 16px;
  max-width: 75%;
  width: 100%; // Make full width but keep the max-width for larger screens
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column; // Stack elements vertically on smaller screens
    align-items: flex-start;
    max-width: 100%; // Use full width on smaller screens
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 0; // Remove margin on smaller screens
    margin-bottom: 10px; // Add bottom margin for stacked layout
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #E1E1E1;
  }
`;

const OnlineIndicator = styled.div`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 26px;
  left: 26px;
  background: #34C759;
  border-radius: 50%;
  border: 2px solid #FFF8E7;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
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
  white-space: nowrap;
  margin-left: 12px;
  @media (max-width: 768px) {
    margin-left: 0; // Adjust alignment for mobile
    width: 100%; // Ensure it doesn't overlap other content
    text-align: right; // Align right for consistency
  }
`;

const SilverBotComponent = ({ currentMessageIndex, onMessageDisplayed }) => {
  const timestamp = getCurrentTimestamp();
  const [lastDisplayedMessageIndex, setLastDisplayedMessageIndex] = React.useState(-1);

  React.useEffect(() => {
    if (currentMessageIndex !== lastDisplayedMessageIndex) {
      onMessageDisplayed(currentMessageIndex);
      setLastDisplayedMessageIndex(currentMessageIndex);
    }
  }, [currentMessageIndex, onMessageDisplayed, lastDisplayedMessageIndex]);

  return (
    <Container>
      {messagesData.slice(0, currentMessageIndex + 1).map((msg) => (
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
