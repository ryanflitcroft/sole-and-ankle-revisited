import React from 'react'
import styled from 'styled-components/macro'

import { WEIGHTS, MEDIA_QUERIES } from '../../constants'

import Breadcrumbs from '../Breadcrumbs'
import Select from '../Select'
import Spacer from '../Spacer'
import ShoeSidebar from '../ShoeSidebar'
import ShoeGrid from '../ShoeGrid'

const ShoeGridBreadcrumbs = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href='/sale/shoes'>Shoes</Breadcrumbs.Crumb>
    </Breadcrumbs>
  )
}

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <WrapperCol>
            <HeaderBreadcrumbs>
              <ShoeGridBreadcrumbs />
            </HeaderBreadcrumbs>
            <Title>Running</Title>
          </WrapperCol>
          <SelectWrapper>
            <Select
              label='Sort'
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value='newest'>Newest Releases</option>
              <option value='price'>Price</option>
            </Select>
          </SelectWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <SidebarBreadcrumbs>
          <ShoeGridBreadcrumbs />
        </SidebarBreadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`

const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
`

const SelectWrapper = styled.div`
  @media ${MEDIA_QUERIES.tabletMax} {
    display: none;
  }
`

const SidebarBreadcrumbs = styled.div``

const HeaderBreadcrumbs = styled.div`
  display: none;

  @media ${MEDIA_QUERIES.tabletMax} {
    display: revert;
  }
`

const LeftColumn = styled.div`
  flex-basis: 248px;
  @media ${MEDIA_QUERIES.tabletMax} {
    display: none;
  }
`

const MainColumn = styled.div`
  flex: 1;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${MEDIA_QUERIES.tabletMax} {
    align-items: flex-end;
  }
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`

export default ShoeIndex
