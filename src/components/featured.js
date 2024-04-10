import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import videoData from '../data/featured.json'; 
import image1 from '../img/image1.png'; 
import image2 from '../img/image2.png';
import image3 from '../img/image3.png';
import image4 from '../img/image4.png';

const FeaturedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px; // Adjust the gap as necessary
  padding: 20px;
  background-color: #fff; // Assuming a white background
`;

const VideoContainer = styled.div`
  width: 100%; // Full width of the column
  cursor: pointer;
`;

const VideoLink = styled.a`
  text-decoration: none;
`;

const VideoImage = styled.img`
  width: 100%; // Take the full width of the container
  display: block; // Ensure no extra space below the image
`;

const VideoTitle = styled.h3`
  color: black;
  font-size: 1.5rem; // 24px if base font-size is 16px
  font-weight: 800;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const VideoTag = styled.div`
  display: inline-block;
  border-radius: 20px;
  border: 5px solid #DE9811;
  padding: 10px;
  margin-right: 10px; // Space between tags
  margin-bottom: 10px; // Space below the tag
`;

const VideoTagText = styled.span`
  color: #DE9811;
  font-size: 1rem; // 16px if base font-size is 16px
  font-weight: 800;
`;

const images = [image1, image2, image3, image4];

const Featured = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videoData.videos);
  }, []);

  return (
    <FeaturedContainer>
      {videos.map((video, index) => {
        const imageSrc = images[index]; // Get the corresponding image from the array
        return (
          <VideoContainer key={index}>
            <VideoLink href={video.url} target="_blank" rel="noopener noreferrer">
              <VideoImage src={imageSrc} alt={video.title} />
              <VideoTitle>{video.title}</VideoTitle>
            </VideoLink>
            {video.tags.map((tag, tagIndex) => (
              <VideoTag key={tagIndex}>
                <VideoTagText>{tag}</VideoTagText>
              </VideoTag>
            ))}
          </VideoContainer>
        );
      })}
    </FeaturedContainer>
  );
};

export default Featured;
