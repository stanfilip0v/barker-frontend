import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Comments extends Component {

    render() {
        const { comments } = this.props;
        return (
            <Fragment>
                <h2>Comments</h2>
                <div className="comments">
                    {comments.length > 0
                        ? comments.map((comment) => (
                            <div className="comment" key={comment._id}>
                                <Link to={`/user/profile/${comment.creator._id}`}>
                                    <div className="image">
                                        <img src={`${comment.creator.picture}`} alt="profile pic" />
                                        <span>{comment.creator.username}</span>
                                    </div>
                                </Link>
                                <div className="comment-content-outer">
                                    <div className="comment-content">
                                        {comment.content}
                                    </div>
                                    <ul>
                                        <li>{comment.creationDate.split('T')[0]}</li>
                                    </ul>
                                </div>
                            </div>
                        ))
                        : <h4>No comments</h4>}
                    
                </div>
            </Fragment>
        )
    }
}

export default Comments;