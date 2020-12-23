import React, {Component} from 'react';
import PostServices from "../../services/PostServices";

class FullPost extends Component {

    state = {post: null};
    postService = new PostServices();

    async componentDidMount() {
        let {id} = this.props;
        let post = await this.postService.posts(id);
        this.setState({post});
        console.log(id);
    }

    render() {

        let {post} = this.state;

        return (
            <div>
                {post && <div>{post.id}-{post.body}</div>}
            </div>
        );
    }
}


export default FullPost;