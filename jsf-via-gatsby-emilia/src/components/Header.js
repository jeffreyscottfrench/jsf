import React from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

import * as palette from '../../config/Style';

const Wrapper = styled.div``;
const Content = styled.div``;
const Name = styled.h1``;
const Line = styled.div``;

const Header = ({ name }) => (
  <Wrapper className="wrapper">
    <Content className="header">
      <Overdrive id="name-to-back">
        <Name className="h1 name">{name}</Name>
      </Overdrive>
      <Line id="menuline" className="line" />
    </Content>
  </Wrapper>
);

export default Header;
