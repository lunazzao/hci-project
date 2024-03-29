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


const MenuLabel = styled.span`
  font-size: 28px;
  color: #000; // Text color
`;

// Add more styled components as needed...

const Sidebar = () => {
  return (
    <SidebarContainer>
      <MenuItem icon={ChatIcon} label="Chat" />
      <MenuItem icon={CalendarIcon} label="Calendar" />
      <MenuItem icon={CommunityIcon} label="Community" />
    </SidebarContainer>
  );
};

export default Sidebar;
