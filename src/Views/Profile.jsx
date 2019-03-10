import React, { Component } from 'react';
import Profile from '../Components/Profile';

class ProfilePage extends Component {

    render() {
        return (
            <Profile pathInfo={this.props.match} />
        )
    }
}

export default ProfilePage;