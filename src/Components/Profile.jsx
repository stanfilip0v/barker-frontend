import React, { Component } from 'react';
import UserService from '../Services/user-service.js';
import BarkPreview from './BarkPreview';
import { StateConsumer } from './Contexts/state-context';

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

    followUser = async () => {
        const user = await Profile.service.followUser(this.state._id);
        this.setState({
            ...user
        });
    }

    render() {
        return (
            <StateConsumer>
                {
                    (state) => (
                        <main className="profile">
                            <div className="user-info">
                                <img src={this.state.picture} alt="profile pic" />
                                <h2>{this.state.username}</h2>
                                <h3>{this.state.email}</h3>
                                <p><span>{this.state.followers.length} Followers </span> <span> {this.state.following.length} Following</span></p>
                                {state.userId !== this.state._id ? <button onClick={this.followUser}>{!this.state.followers.includes(state.userId) ? `Follow` : `Unfollow`}</button> : null}
                            </div>
                            <div className="feed">
                                <h1>Barks</h1>
                                <BarkPreview barks={this.state.barks} user={this.state} />
                            </div>
                        </main>
                    )
                }
            </StateConsumer>
        )
    }
}

export default Profile;