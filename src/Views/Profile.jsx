import React, { Component, Fragment } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Profile from '../Components/Profile';

class ProfilePage extends Component {
    
    render() {
        return (
            <Fragment>
                <Header />
                <Profile pathInfo={this.props.match}/>
                <Footer />
            </Fragment>
        )
    }
}

export default ProfilePage;