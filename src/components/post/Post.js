import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Post extends Component {

    render() {
        let {item, match: {url}} = this.props;
        return (
            <div>
                ID - {item.id}
                <br/>
                TITLE - {item.title}

                <Link to={url + `/` + item.id}> POST DETAILS</Link>
                <hr/>

            </div>

        )
    }
}

export default withRouter(Post);
