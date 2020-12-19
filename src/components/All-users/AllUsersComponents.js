import React, {Component} from 'react';
import UserComponent from "../User/UserComponent";
import './AllUsers.css'

class AllUsersComponents extends Component {


    state = {posts: [], classState: 'one', choosenPost: null};

    flag = false;


    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromAPI => {
                this.setState({posts: postsFromAPI})
            })
    }


    changeColor = () => {
        if (this.flag) {
            this.setState({classState: 'one'})
        } else {
            this.setState({classState: 'two'})
        }
        this.flag = !this.flag;
    }


    selectThisPost = (id) => {
        let chosenPost = this.state.posts.find(value => value.id === id);
        this.setState({chosenPost})

    }


    render() {

        let {posts, classState, chosenPost} = this.state;
        return (
            <div>
                <h2 onClick={this.changeColor} className={classState}>All POSTS PAGE</h2>
                {
                    posts.map(value =>
                        (<UserComponent
                            item={value}
                            key={value.id}
                            selectThisPost={this.selectThisPost}
                        />)
                    )

                }

                <hr/>

                {
                    chosenPost && <UserComponent item={chosenPost} showDetails={true}/>
                }
            </div>
        );
    }
}

export default AllUsersComponents;