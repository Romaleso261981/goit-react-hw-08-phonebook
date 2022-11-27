import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  margin-right: 20px;
  width: 100px;
  padding: 10px 0;
  border: 1px solid black;
  border-radius: 5px;
  background-color: whitesmoke;
  box-shadow: 0px 0px 10px 1px blanchedalmond;
  &.active {
    color: black;
    background-color: orange;
  }
`;
export const Header = styled.div`
  width: 100%;
  padding: 5px 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px blanchedalmond;
`;
