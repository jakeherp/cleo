import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      Built by <a href="https://herper.io/">Jacob Herper</a>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 1.5rem;
  text-align: center;
`;

export default Footer;
