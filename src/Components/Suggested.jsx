import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../Services/user-service';
import withData from './Hocs/UserList-with-data';

class Suggested extends Component {

    render() {
        const { users } = this.props;

        return (
            <main className="to-follow">
                <div className="users">
                    <h1>Suggested</h1>
                    {users.map((user) => (
                        <div className="suggested-user" key={user._id}>
                            <Link to={`/user/profile/${user._id}`}><img src={user.picture} alt="profile pic" /></Link>
                            <h2>{user.username}</h2>
                            <h4>{user.email}</h4>
                            {user.followedBy ? <p>Followed by {user.followedBy}</p> : null}
                        </div>
                    ))}
                </div>
            </main>
        )
    }
}

const service = new UserService();
const SuggestedHoc = withData(Suggested, [], service.getSuggested);

export default SuggestedHoc;