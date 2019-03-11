import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { StateConsumer } from '../Components/Contexts/state-context';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Following from '../Components/Following';
import Followers from '../Components/Followers';
import Profile from '../Components/Profile';
import Suggested from '../Components/Suggested';

class UserPage extends Component {
    
    render() {
        return (
            <Fragment>
                <Header />
                <Route path={`${this.props.pathInfo.match.url}/suggested`} exact component={Suggested}/>
                <Route path={`${this.props.pathInfo.match.url}/following/:username`} render={() => <Following pathInfo={this.props.pathInfo}/>}/>
                <Route path={`${this.props.pathInfo.match.url}/followers/:username`} render={() => <Followers pathInfo={this.props.pathInfo}/>}/>
                <Route path={`${this.props.pathInfo.match.url}/profile/:userId`} render={() => <Profile pathInfo={this.props.pathInfo}/>}/>
                <Footer />
            </Fragment>
        )
    }
}

const UserPageWithContext = (props) => {
    return (
        <StateConsumer>
            {
                (state) => (
                    state.isLogged ? <UserPage pathInfo={props}/> : <Redirect to="/"/>
                )
            }
        </StateConsumer>
    )
}

export default UserPageWithContext;