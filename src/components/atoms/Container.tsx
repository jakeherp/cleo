import React from 'react';
import styled from 'styled-components';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin: 0 auto;
  width: calc(100% - 4rem);
`;

export default Container;
