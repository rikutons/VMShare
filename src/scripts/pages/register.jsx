import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
    render() {
        return(
            <div>
              <h1>新規登録</h1>
              <form>
                <input type="text" name="name"/>
                <input type="text" name="pass"/>
              </form>
            </div>
        )
    }
}

export default Register;