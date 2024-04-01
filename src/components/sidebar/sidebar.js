import React from 'react';
import styled from 'styled-components';
import ChatIcon from '../../logos/chat.svg'; // Replace with the actual path to your icons
import CalendarIcon from '../../logos/calendar.svg';
import CommunityIcon from '../../logos/community.svg';
import MenuItem from './menuItem'; 

const SidebarContainer = styled.div`
  // Full width to align with sidebar
  padding: 60px 0; // Vertical padding for spacing, adjust as needed
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F3D2C1; // Use the color from your image
  padding: 20px;
  height: 100%; // Full height of the parent container
`;

// Add more styled components as needed...

const Sidebar = ({ changeActiveComponent }) => {
  return (
    <SidebarContainer>
      <MenuItem icon={ChatIcon} label="Search" onClick={() => changeActiveComponent('chat')} />
      <MenuItem icon={CommunityIcon} label="About Us" onClick={() => changeActiveComponent('about')} />
      <MenuItem icon={CalendarIcon} label="Featured" onClick={() => changeActiveComponent('featured')} />
    </SidebarContainer>
  );
};

export default Sidebar;
