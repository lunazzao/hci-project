import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import image1 from '../img/image1.png'; // Replace with actual image names
import image2 from '../img/image2.png'; // Replace with actual image names
import image3 from '../img/image3.png'; // Replace with actual image names
import image4 from '../img/image4.png'; // Replace with actual image names
import videoTitlesData from '../data/featured.json';

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

const images = [image1, image2, image3, image4];

const Featured = () => {
  const [videoTitles, setVideoTitles] = useState([]);

  useEffect(() => {
    // Assume videoTitlesData is an array of titles
    setVideoTitles(videoTitlesData.titles);
  }, []);

  return (
    <FeaturedContainer>
      {images.map((imageSrc, index) => (
        <VideoContainer key={index}>
          <VideoImage src={imageSrc} alt={`Featured Video ${index + 1}`} />
          <VideoTitle>{videoTitles[index]}</VideoTitle>
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
