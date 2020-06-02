import React from 'react';
import styled from 'styled-components';
import { IChildren } from '../../interfaces/children';
import { defaults } from '../templates/Layout/styles';

const Content = ({ children }: IChildren) => {
  return (
    <StyledContent>
      {children}
    </StyledContent>
  );
};

const StyledContent = styled.div`
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  box-shadow: ${defaults.boxShadow};
  box-sizing: border-box;
  margin-top: -2px;
  min-height: 60vh;
  padding: 1.5rem 2rem;
  position: relative;
`;

export default Content;
