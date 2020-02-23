import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
    <nav>
        <ul>
            <li><Link to="/">Index</Link></li>
            <li><Link to="/rws/">Waldorf Education</Link></li>
            <li><Link to="/styleguide/">Style Guide</Link></li>
        </ul>
    </nav>
)

export default Navigation