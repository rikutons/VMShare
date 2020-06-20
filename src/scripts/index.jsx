import '../sass/style.sass';
import React from "react";
import ReactDOM from 'react-dom'
import Top from './pages/top'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component{
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Top} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);