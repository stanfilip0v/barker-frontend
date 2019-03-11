import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BarkDetailsWithContext from './BarkDetails';
import Comments from './Comments';
import BarkService from '../Services/bark-service';
import CommentService from '../Services/comment-service';
import UserService from '../Services/user-service';

class Bark extends Component {
    state = {
        bark: {},
        comments: [],
        comment: '',
        isLiked: false,
        error: null
    }

    static barkService = new BarkService();
    static commentService = new CommentService();
    static userService = new UserService();

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const barkId = this.state.bark._id;

        await Bark.commentService.createComment(barkId, { content: this.state.comment });
        const response = await Bark.barkService.getBarkById(barkId);

        this.setState({
            bark: response.bark,
            comments: response.bark.comments,
            comment: ''
        });
    }

    deleteBark = async (barkId) => {
        await Bark.barkService.deleteBark(barkId);
        this.setState({
            deleted: true
        });
    }

    likeBark = async () => {
        const responseOne = await Bark.barkService.likeBark(this.state.bark._id);
        const responseTwo = await Bark.barkService.getBarkById(this.state.bark._id)

        this.setState({
            isLiked: responseOne.isLiked,
            bark: responseTwo.bark,
            comments: responseTwo.bark.comments
        });
    }

    async componentDidMount() {
        const barkId = this.props.pathInfo.match.params.barkId;
        const barkResponse = await Bark.barkService.getBarkById(barkId);
        const userResponse = await Bark.userService.getUser(this.props.userId);
        
        this.setState({
            bark: barkResponse.bark,
            comments: barkResponse.bark.comments,
            isLiked: userResponse.likedBarks.includes(barkId) ? true : false
        });
    }

    render() {
        return (
            this.state.deleted
                ? <Redirect to='/'/>
                : <main className="bark-main">
                <BarkDetailsWithContext bark={this.state.bark} deleteBark={this.deleteBark} isLiked={this.state.isLiked} likeBark={this.likeBark}/>
                <Comments comments={this.state.comments}/>
                <div className="add-comment">
                    <form onSubmit={this.handleSubmit}>
                        <textarea name="comment" onChange={this.handleChange} value={this.state.comment}></textarea>
                        <button>Add comment</button>
                    </form>
                </div>
            </main>
        )
    }
}

export default Bark;