import React, { Component, Fragment } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Profile from '../Components/Profile';

class ProfilePage extends Component {
    
    render() {
        return (
            <Fragment>
                <Header />
                <Profile userId={this.props.match.params}/>
                <Footer />
            </Fragment>
        )
    }
}

export default ProfilePage;