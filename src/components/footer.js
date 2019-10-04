import { Link } from 'gatsby';
import React from 'react';
import './footer.scss';

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <h3 style={{ margin: 0 }}>
        <Link to='/'> CETAV | Visítanos </Link>
      </h3>
    </div>
  </footer>
)

export default Footer
