import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import AppBar from '../AppBar';

const Layout = ({ children, onChange }) => (
  <>
    <AppBar onChange={onChange} />
    <Container>{children}</Container>
  </>
);

Layout.protoType = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Layout;
