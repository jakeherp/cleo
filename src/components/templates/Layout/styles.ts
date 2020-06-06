import styled, { createGlobalStyle } from 'styled-components';

export const colours = {
  primary: '#0815FF',
  secondary: '#F7BF31',
  lightGrey: '#F5F6FA',
  darkGrey: '#A2A2A2',
};

export const defaults = {
  boxShadow: 'rgba(0, 0, 0, 0.08) 1px 1px 2px',
};

const Styles = createGlobalStyle`
  body {
    background: ${colours.lightGrey};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  a {
    border-bottom: 3px solid ${colours.secondary};
    color: inherit;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      border-bottom: 3px solid ${colours.primary};
    }
  }
`;

export default Styles;

export const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 5px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  border-bottom: 1px solid #eee;

  h3 {
    margin: 0;
  }

  summary {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 0.5rem 4rem 6fr 1fr;
    grid-gap: 1rem;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #f3f3f3;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

export const Transactions = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Button = styled.button`
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &.remove {
    background: #fce4ec;
    border: 1px solid #ad1457;
    color: #ad1457;

    &:hover {
      background: #f8bbd0;
    }
  }

  &.add {
    background: #c8e6c9;
    border: 1px solid #81c784;
    color: #1b5e20;

    &:hover {
      background: #66bb6a;
    }
  }
`;