import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 30px 0;
  margin-bottom: 16px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0e6d2; // Adjust color for hover state
  }

  // Active state style if needed
  &.active {
    background-color: #dec0a0; // Adjust color for active state
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const Label = styled.span`
  font-size: 28px;
  font-weight: 800;
  color: #333; 
`;

function MenuItem({ icon, label, active, onClick }) {
  return (
    <ItemContainer className={active ? 'active' : ''} onClick={onClick}>
      {icon && <Icon src={icon} alt={label} />}
      <Label>{label}</Label>
    </ItemContainer>
  );
}

export default MenuItem;
