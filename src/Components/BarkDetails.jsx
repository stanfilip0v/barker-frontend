import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StateConsumer } from './Contexts/state-context';

class BarkDetails extends Component {

    render() {
        const { bark, userId, isAdmin, likeBark, deleteBark, isLiked } = this.props;

        return (
            Object.keys(bark).length === 0
                ? ''
                : <div className="bark">
                    <Link to={`/user/profile/${bark.creator._id}`}>
                        <div className="image">
                            <img src={`${bark.creator.picture}`} alt='smh' />
                            <span>{bark.creator.username}</span>
                        </div>
                    </Link>
                    <div className="content">
                        <ul>
                            <li> {bark.creator.email}</li>
                        </ul>
                        <div className="bark-content">
                            {bark.content}
                        </div>
                        <ul>
                            <li>{bark.creationDate.split('T')[0]}</li>
                            <li><i className="fas fa-heart" style={{ color: isLiked ? 'red' : 'black' }} onClick={() => likeBark(bark._id)}></i> {bark.likes}</li>
                        </ul>
                        {userId === bark.creator._id || isAdmin ? <button onClick={() => deleteBark(bark._id)}>Delete</button> : null}
                    </div>
                </div>
        )
    }
}

const BarkDetailsWithContext = (props) => {
    return (
        <StateConsumer>
            {
                (state) => (
                    <BarkDetails bark={props.bark} deleteBark={props.deleteBark} userId={state.userId} isAdmin={state.isAdmin} likeBark={props.likeBark} isLiked={props.isLiked}/>
                )
            }
        </StateConsumer>
    )
}

export default BarkDetailsWithContext;