import React, {Component} from 'react';
import Post from "../post/Post";
import PostServices from "../../services/PostServices";
import {Route, Switch, withRouter} from "react-router-dom";
import FullPost from "../full-post/FullPost";

class AllPosts extends Component {

    postService = new PostServices();
    state = {posts: []}

    async componentDidMount() {
        let posts = await this.postService.posts();
        this.setState({posts});

    }

    render() {
        let {posts} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }


                <hr/>

                <Switch>
                    <Route path={url + `/:id`} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <FullPost {...props} key={id}/>;

                    }
                    }/>
                </Switch>

                <hr/>


            </div>
        );
    }

}

export default withRouter(AllPosts);