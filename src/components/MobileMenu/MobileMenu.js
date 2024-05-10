/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

import { WEIGHTS } from '../../constants'

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay>
      <Content aria-label='Menu'>
        <Filler />
        <CloseButton onClick={onDismiss}>
          <Icon id='close' strokeWidth={2} />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href='/terms'>Terms and Conditions</FooterLink>
          <FooterLink href='/privacy'>Privacy Policy</FooterLink>
          <FooterLink href='/contact'>Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background: var(--color-overlay);
  display: flex;
  justify-content: flex-end;
`
const Content = styled(DialogContent)`
  background: var(--color-white);
  width: 300px;
  /* height: auto; */
  display: flex;
  flex-direction: column;
  padding: 32px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Link = styled.a`
  text-decoration: none;
`

const NavLink = styled(Link)`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  background: transparent;
  border: none;
  padding: 16px;
`

const FooterLink = styled(Link)`
  color: var(--color-gray-700);
  font-weight: ${WEIGHTS.normal};
  font-size: 0.875rem;
`

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
`

const Filler = styled.div`
  flex: 1;
`
export default MobileMenu
