import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const SiteTitle = styled.h1`
  font-size: calc(var(--font-size, 16px) * 1.5);
  letter-spacing: 1px;
`;

const Header = () => (
  <header>
    <SiteTitle className="name">
      <Link to="/">Jeffrey Scott French</Link>
    </SiteTitle>
    <div className="line" />
  </header>
);

export default Header;
