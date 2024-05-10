import React from 'react'
import styled from 'styled-components/macro'

import { WEIGHTS, MEDIA_QUERIES } from '../../constants'
import Logo from '../Logo'
import Icon from '../Icon'
import UnstyledButton from '../UnstyledButton'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Actions>
          <UnstyledButton>
            <Icon id='shopping-bag' strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id='search' strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon
              id='menu'
              strokeWidth={1}
              onClick={() => setShowMobileMenu(true)}
            />
          </UnstyledButton>
        </Actions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;

  @media ${MEDIA_QUERIES.tabletMax} {
    border-top: 4px solid var(--color-gray-300);
    justify-content: space-between;
    align-items: center;
  }

  @media ${MEDIA_QUERIES.phoneMax} {
    padding-inline: 16px;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8.9vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${MEDIA_QUERIES.tabletMax} {
    display: none;
  }
`

const Actions = styled.div`
  display: none;

  @media ${MEDIA_QUERIES.tabletMax} {
    display: flex;
    gap: 32px;
  }

  @media ${MEDIA_QUERIES.phoneMax} {
    gap: 16px;
  }
`

const LogoWrapper = styled.div`
  flex: 1;

  @media ${MEDIA_QUERIES.tabletMax} {
    flex: revert;
  }
`
const Filler = styled.div`
  flex: 1;

  @media ${MEDIA_QUERIES.tabletMax} {
    display: none;
  }
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`

export default Header
