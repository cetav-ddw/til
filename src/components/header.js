import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

// ToDo agregar texto al link y usar h1 en homepage
const Header = () => (
  <header className="main-header">
    <div className="main-header__wrapper">
      <Link to="/"></Link>
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
