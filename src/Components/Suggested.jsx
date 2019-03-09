import React, { Component } from 'react';
import UserService from '../Services/user-service';

class Suggested extends Component {
    state = {
        users: []
    }

    static service = new UserService();

    followUser = async (userId) => {
        await Suggested.service.followUser(userId);
        const users = await Suggested.service.getSuggested();
        this.setState({
            users
        });
    }

    async componentDidMount() {
        const users = await Suggested.service.getSuggested();
        this.setState({
            users
        });
    }

    render() {
        return (
            <main className="to-follow">
                <div className="users">
                    <h1>Suggested</h1>
                    {this.state.users.map((user) => (
                        <div className="suggested-user" key={user._id}>
                            <img src={user.picture} alt="profile pic" />
                            <h2>{user.username}</h2>
                            <h4>{user.email}</h4>
                            {user.followedBy ? <p>Followed by {user.followedBy}</p> : null}
                            <button onClick={() => this.followUser(user._id)}>Follow</button>
                        </div>
                    ))}
                </div>
            </main>
        )
    }
}

export default Suggested;