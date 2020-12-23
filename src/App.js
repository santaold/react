import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllPosts from "./components/all-posts/AllPosts";

export class App extends Component {

    render() {

        return (
            <Router>
                <div>
                    <Link to={`/posts`}> To ALL Posts </Link>

                    <hr/>

                    <Switch>
                        <Route path={`/posts`} render={() => <AllPosts/>}/>

                    </Switch>

                    <hr/>
                </div>
            </Router>

        );
    }
}
