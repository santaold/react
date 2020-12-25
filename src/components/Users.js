import React, {Component} from 'react';
import FullUser from "./FullUsers";


class Users extends Component {


    render() {
        const {items: users} = this.props;

        return (
            <div>
                <FullUser items={users}/>
            </div>
        );
    }
}

export default Users;