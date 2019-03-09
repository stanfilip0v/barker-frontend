import React, { Component, Fragment } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Suggested from '../Components/Suggested';

class SuggestedPage extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Suggested />
                <Footer />
            </Fragment>
        )
    }
}

export default SuggestedPage;