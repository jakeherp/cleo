import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/welcome.jpg';

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="Cleo Tech Task" />
      <h1>
        <strong>Cleo</strong> Challenge
      </h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 3rem;
  padding: 1.5rem;
  text-align: center;

  img {
    height: 3rem;
  }

  h1{
    display: inline;
    line-height: 3rem;
    margin: 0 1rem;

    strong {
      font-weight: 900;
    }
  }
`;

export default Header;
