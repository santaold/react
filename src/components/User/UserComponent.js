import React, {Component} from 'react';


class UserComponent extends Component {
    render() {

        let {item, selectThisPost, showDetails} = this.props;
        const text = showDetails ? item.body : item.title;
        return (
            <div>
                {'ID'} {item.id}
                <br/>
                {text}
                <br/>
                <button onClick={() => selectThisPost(item.id)}> choooose me</button>
                <hr/>
            </div>
        );
    }

}

export default UserComponent;