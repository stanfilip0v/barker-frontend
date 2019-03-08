import React from 'react';
import { Link } from 'react-router-dom';

const BarkPreview = (props) => {
    const { barks, user } = props;

    return (
        barks.map((bark) => (
            <div className="bark" key={bark._id}>
                <Link to={`/user/${bark.creator._id}`}>
                    <div className="image">
                        <img src={`${bark.creator.picture || user.picture}`} alt='smh' />
                        <span>{bark.creator.username || user.username}</span>
                    </div>
                </Link>
                <div className="content">
                    <ul>
                        <li> {bark.creator.email || user.email}</li>
                    </ul>
                    <Link to={`/${bark.creator.username || user.username}/${bark._id}`}>
                        <div className="bark-content">
                            {bark.content}
                        </div>
                    </Link>
                    <ul>
                        <li>{bark.comments.length} Comments</li>
                        <li>{bark.creationDate.split('T')[0]}</li>
                        <li><i className="fas fa-heart"></i> {bark.likes}</li>
                    </ul>
                </div>
            </div>
        ))
    )
}

export default BarkPreview;