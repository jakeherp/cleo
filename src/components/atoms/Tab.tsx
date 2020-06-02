import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IChildren } from '../../interfaces/children';
import { defaults } from '../templates/Layout/styles';

interface IProps extends IChildren {
  to: string;
}

const Tab = ({ children, to }: IProps) => {
  return (
    <StyledTab>
      <NavLink to={to} activeClassName='active' exact>
        {children}
      </NavLink>
    </StyledTab>
  );
};

const StyledTab = styled.li`
  flex-grow: 1;

  a {
    box-sizing: border-box;
    display: block;
    padding: 1rem;
    text-align: center;
    width: 100%;

    &.active {
      background: #fff;
      border-bottom: 0;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border: 1px solid #eee;
      box-shadow: ${defaults.boxShadow};
    }
  }
`;

export default Tab;
