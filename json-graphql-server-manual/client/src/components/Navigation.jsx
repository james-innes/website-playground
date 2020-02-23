import React from "react"
import { Link } from "react-router-dom";

export default () => (
    <nav>
        <ul>
            <li><Link to="/">Index</Link></li>
            <li><Link to="/rws/">Waldorf Education</Link></li>
            <li><Link to="/styleguide/">Style Guide</Link></li>
        </ul>
    </nav>
)