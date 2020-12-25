import React, {Component} from 'react';
import Users from "./components/Users";
import customContext from "./services/ContextService";


export class App extends Component {

    Context = new customContext();
    state = {users: []};


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                this.setState({users: value});
            });
    }


    render() {
        const {Provider, Consumer} = this.Context;
        const {users} = this.state;
        return (
            <Provider value={'aaaaa'}>
                <div>
                    <Users items={users}/>
                </div>
            </Provider>
        );
    }
}
