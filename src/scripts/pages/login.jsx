import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return(
            <div>
              <h1>ログイン</h1>
              <form>
                <input type="text" name="name"/>
                <input type="text" name="pass"/>
              </form>
            </div>
        )
    }
}

export default Login;