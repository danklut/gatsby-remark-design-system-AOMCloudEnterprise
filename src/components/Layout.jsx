import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import '../utils/prism-theme.scss';
import './base.scss';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Design System - AOM Cloud Enterprise"
      meta={[
        {
          name: 'description',
          content: 'Gatsby Design System - AOM Cloud Enterprise ,Design System for the AOM Cloud Enterprise Group',
        },
        { name: 'keywords', content: 'Gatsby, Gatsby-Plugin, Remark, Design, System,AOM Cloud Enterprise' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1000,
        padding: '2rem 1.0875rem 1.45rem 2rem',
      }}
    >
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
