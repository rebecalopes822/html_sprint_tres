import styled from "styled-components";
import Link from "next/link";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: black;
  width: 100%;
  height: 52px;
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
  background-color: #00a3ff;
  height: 30px;
  gap: 5px;
  align-items: center;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 0;
  font-size: 15px;
`;

export const NavItem = styled.li`
  &:hover {
    color: #00a3ff;
  }
`;

export const Telefone = styled.div``;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: all 0.3s;
  &.active {
    color: #00a3ff;
  }
  &:hover {
    color: #00a3ff;
  }
`;
