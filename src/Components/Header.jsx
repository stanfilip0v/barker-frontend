import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { StateConsumer } from './Contexts/state-context';

class Header extends Component {
    render() {
        return (
            <StateConsumer>
                {
                    (state) => {
                        return(
                        <header>
                            <nav>
                                <Link to="/">
                                    <img class="logo" src="/dog-1484728_640.png" alt="smh" />
                                </Link>
                                <ul>
                                    { state.isAdmin ? <li><Link to="/">View reports</Link></li> : null }
                                    <li><Link to="/">Who to follow</Link></li>
                                    <li><Link to="/">My profile</Link></li>
                                    <li><Link to="/">Logout</Link></li>
                                </ul>
                            </nav>
                        </header>
                    )}
                }
            </StateConsumer>
        )
    }
}

export default Header;