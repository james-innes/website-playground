import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
    <nav>
        <ul>
            <li><Link to="/">Index</Link></li>
            <li><Link to="/rws/">Waldorf Education</Link></li>
            <li><Link to="/qe/">Queen Elizabeth's Sixth Form</Link></li>
        </ul>
    </nav>
)

export default Navigation