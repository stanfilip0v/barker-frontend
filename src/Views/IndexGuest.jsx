import React, { Component, Fragment } from 'react';
import LoginWithContext from '../Components/LoginForm';
import RegisterForm from '../Components/RegisterForm';
import Footer from '../Components/Footer';

class IndexGuest extends Component {
    state = {
        form: 'login'
    }

    loginForm = () => {
        this.setState({
            form: 'login'
        });
    }

    registerForm = () => {
        this.setState({
            form: 'register'
        });
    }

    render() {
        return (
            <Fragment>
                <main className="guest">
                    <div className="content-left">
                        <div className="left">
                        {
                            this.state.form === 'login'
                                ? <LoginWithContext />
                                : <RegisterForm />
                        }
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="right">
                            <img className="logo" src="/dog-1484728_640.png" alt="smh" />
                            <h2>See what is happening in the world right now</h2>
                            <h4>Join Barker right now</h4>
                            <div className="links">
                                <button onClick={this.loginForm}>Sign in</button>
                                <button onClick={this.registerForm}>Sign up</button>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </Fragment>
        )
    }
}

export default IndexGuest;