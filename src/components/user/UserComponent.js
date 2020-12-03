import React, {Component} from 'react';
import './userComponent.css';

class UserComponent extends Component {

    render() {

        let {item, clsName} = this.props;
        return (
            <div className={clsName}>
                <h2>
                {item.age}-{item.status.toString()}-{item.name}
                </h2>

            </div>
        );
    }
}

export default UserComponent;