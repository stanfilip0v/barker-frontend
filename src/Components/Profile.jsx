import React, { Component } from 'react';
import UserService from '../Services/user-service.js';

class Profile extends Component {
    state = {
        username: '',
        email: '',
        picture: '',
        _id: '',
        barks: [],
        followers: [],
        following: [],
        likedBarks: [],
    }

    static service = new UserService();

    async componentDidMount() {
        const userId = this.props.userId.userId;
        const user = await Profile.service.getUser(userId);

        this.setState({
            ...user
        });
    }

    render() {
        return (
            <main className="profile">
                <div className="user-info">
                    <img src={this.state.picture} alt="profile pic" />
                    <h2>{this.state.username}</h2>
                    <h3>{this.state.email}</h3>
                    <p><span>{this.state.followers.length} Followers </span> <span> {this.state.following.length} Following</span></p>
                    <button>Follow</button>
                </div>
            </main>
        )
    }
}

export default Profile;
                // <div className="feed">
                //     <h1>Barks</h1>
                //     <div className="bark">
                //         <div className="image">
                //             <img src="profile pic" alt="profile pic" />
                //         </div>
                //         <div className="content">
                //             <ul>
                //                 <li>{Username}</li>
                //                 <li>{email}</li>
                //             </ul>
                //             <div className="bark-content">
                //                 {barkContent}
                //             </div>
                //             <ul>
                //                 <li>{comments.length} Comments</li>
                //                 <li>{Date}</li>
                //                 <li><i className="fas fa-heart"></i> {likes}</li>
                //             </ul>
                //         </div>
                //     </div>
                // </div>