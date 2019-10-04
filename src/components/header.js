import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './header.scss';

const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1 style={{ margin: 0 }}>
        <Link to='/'> TIL | CETAV </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
