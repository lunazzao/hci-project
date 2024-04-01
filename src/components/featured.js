import React from 'react';
import styled from 'styled-components';

const FeaturedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px; // Adjust the gap as necessary
  padding: 20px;
  background-color: #fff; // Assuming a white background
`;

const VideoContainer = styled.div`
  width: 544px;
  height: 484px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 31px;
`;

const VideoImage = styled.img`
  width: 544px;
  height: 324px;
`;

const VideoTitle = styled.div`
  width: 544px;
  height: 74px;
  color: black;
  font-size: 36px;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  letter-spacing: 0.72px;
  word-wrap: break-word;
`;

const VideoTag = styled.div`
  width: 232px;
  height: 56px;
  border-radius: 20px;
  border: 5px solid #DE9811;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const VideoTagText = styled.div`
  color: #DE9811;
  font-size: 24px;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  letter-spacing: 0.48px;
  word-wrap: break-word;
`;

const Featured = () => {
  return (
    <FeaturedContainer>
      {Array.from({ length: 4 }, (_, index) => (
        <VideoContainer key={index}>
          <VideoImage src="https://via.placeholder.com/544x324" alt="Featured Video" />
          <VideoTitle>Fun Seated Cardio Aerobic Exercise</VideoTitle>
          <VideoTag>
            <VideoTagText>Wheelchair</VideoTagText>
          </VideoTag>
          <VideoTag>
            <VideoTagText>30 Minutes</VideoTagText>
          </VideoTag>
        </VideoContainer>
      ))}
    </FeaturedContainer>
  );
};

export default Featured;
