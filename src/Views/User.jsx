import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Following from '../Components/Following';
import Followers from '../Components/Followers';
import Profile from '../Components/Profile';
import Suggested from '../Components/Suggested';

class ProfilePage extends Component {
    
    render() {
        return (
            <Fragment>
                <Header />
                <Route path={`${this.props.match.url}/suggested`} component={Suggested}/>
                <Route path={`${this.props.match.url}/following/:username`} exact render={() => <Following pathInfo={this.props}/>}/>
                <Route path={`${this.props.match.url}/followers/:username`} exact render={() => <Followers pathInfo={this.props}/>}/>
                <Route path={`${this.props.match.url}/profile/:userId`} render={() => <Profile pathInfo={this.props}/>}/>
                <Footer />
            </Fragment>
        )
    }
}

export default ProfilePage;