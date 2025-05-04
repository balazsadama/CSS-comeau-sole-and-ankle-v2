import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <EmptySpace />
      </MainHeader>
    </header>
  );
};

const LogoWrapper = styled.div`
  flex: 2;

  ${Logo} {
    display: inline-block;
  }
`;


const MainHeader = styled.div`
  padding: 16px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  display: flex;
  /* align-items: flex-end; */
  justify-content: space-between;


`;

const Nav = styled.nav`
  flex: 3;

  display: flex;
  justify-content: space-between;
  padding-block: 4px;
  gap: 16px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const EmptySpace = styled.div`
  flex: 2;
`;

export default Header;
