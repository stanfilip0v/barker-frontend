import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

    async shouldComponentUpdate(nextProps, nextState) {
        const newId = nextProps.pathInfo.location.pathname.split('/')[3];
        const oldId = nextState._id;

        if(oldId !== '' && newId !== oldId) {
            const user = await Profile.service.getUser(newId);
            this.setState({
                ...user
            });
        }
    }

    async componentDidMount() {
        const userId = this.props.pathInfo.location.pathname.split('/')[3];
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
                                <p><span>{this.state.followers.length} <Link to={`/user/followers/${this.state.username}`}>Followers</Link> </span> <span> {this.state.following.length} <Link to={`/user/following/${this.state.username}`}>Following</Link></span></p>
                                {state.userId !== this.state._id ? <button onClick={this.followUser}>{!this.state.followers.includes(state.userId) ? `Follow` : `Unfollow`}</button> : null}
                            </div>
                            <div className="feed">
                                <h1>Barks</h1>
                                <br />
                                {this.state.barks.length > 0
                                    ? <BarkPreview barks={this.state.barks} user={this.state} />
                                    : <h4>No barks</h4>}
                            </div>
                        </main>
                    )
                }
            </StateConsumer>
        )
    }
}

export default Profile;