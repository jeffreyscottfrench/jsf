import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/jsf-styles.scss';

const TemplateWrapper = ({ children }) => (
  <div className="site-wrapper">
    <Helmet
      title="Jeffrey Scott French"
      meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
    />
    <Header />
    <section>{children()}</section>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
