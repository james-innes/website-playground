import React from "react"
import PropTypes from "prop-types"
import Navigation from "../components/navigation"

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
