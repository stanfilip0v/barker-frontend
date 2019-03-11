import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { StateConsumer } from '../Components/Contexts/state-context';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Bark from '../Components/Bark';

class BarkPage extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Bark pathInfo={this.props.pathInfo} userId={this.props.userId}/>
                <Footer />
            </Fragment>
        )
    }
}

const BarkWithContext = (props) => {
    return (
        <StateConsumer>
            {
                (state) => (
                    state.isLogged ? <BarkPage pathInfo={props} userId={state.userId}/> : <Redirect to="/"/>
                )
            }
        </StateConsumer>
    )
}

export default BarkWithContext;