import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Top extends Component {
    render() {
        return(
            <div className="top">
                <h1>トップ</h1>
                <div>
                    <Link to="register">Register</Link>
                </div>
                <div>
                    <Link to="login">Log in</Link>
                </div>
            </div>
        )
    }
}

export default Top;