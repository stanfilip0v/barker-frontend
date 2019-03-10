import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../Services/user-service';
import withData from './Hocs/UserList-with-data';

class Following extends Component {

    render() {
        const { users, username } = this.props;

        return (
            <main className="to-follow">
                <div className="users">
                    <h1>Users followed by {username}</h1>
                    {users.map((user) => (
                        <div className="suggested-user" key={user._id}>
                            <Link to={`/user/profile/${user._id}`}><img src={user.picture} alt="profile pic" /></Link>
                            <h2>{user.username}</h2>
                            <h4>{user.email}</h4>
                        </div>
                    ))}
                </div>
            </main>
        )
    }
}

const service = new UserService();
const FollowingHoc = withData(Following, [], service.getFollowing, service.followUser);

export default FollowingHoc;