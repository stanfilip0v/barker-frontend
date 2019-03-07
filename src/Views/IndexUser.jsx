import React, { Component, Fragment } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Feed from '../Components/IndexFeed';

class IndexUser extends Component {

    render() {
        return (
            <Fragment>
                <Header />
                <Feed/>
                <Footer />
            </Fragment>
        )
    }
}

export default IndexUser;