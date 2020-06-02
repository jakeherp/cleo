import React from 'react';
import styled from 'styled-components';
import loader from '../../assets/loader.gif';

const Loader = () => {
  return (
    <StyledLoader>
      <img src={loader} alt="Loading..." />
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  text-align: center;
  top: 0;
  width: 100%;

  img {
    display: block;
    height: 4rem;
    margin: 0 auto;
    width: 4rem;
  }
`;

export default Loader;
