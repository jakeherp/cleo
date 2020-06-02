import React from 'react';
import styled from 'styled-components';
import Tab from '../atoms/Tab';

const Tabs = () => {
  return (
    <StyledTabs>
      <Tab to="/">Dashboard</Tab>
      <Tab to="/bills">Bills</Tab>
      <Tab to="/transactions">Transactions</Tab>
    </StyledTabs>
  );
};

const StyledTabs = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default Tabs;
