import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router';
import AuthService from '../Services/auth-service';
import { StateConsumer } from './Contexts/state-context';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: null
    }

    static service = new AuthService();

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        const response = await LoginForm.service.login({ email: email, password: password });
        
        if(response.error) {
            this.setState({ error: response.error });
        } else {
            this.props.updateState(response, true);
            localStorage.setItem('token', response.token);
            return <Redirect to="/" />;
        }
    }

    render() {
        return (
            <Fragment>
                <form>
                    <h2>Log in</h2>
                    <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Log in</button>
                </form>
                { this.state.error ? <div className="error">{this.state.error}</div> : null }
            </Fragment>
        )
    }
}

const LoginWithContext = (props) => {
    return(
        <StateConsumer>
            {
                (state) => (
                    <LoginForm
                        {...props}
                        isLogged={state.isLogged}
                        updateState={state.updateState}/>
                )
            }
        </StateConsumer>
    )
}

export default LoginWithContext;