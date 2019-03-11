import React, { Component, Fragment } from 'react';
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
        const response = await LoginForm.service.login({ email, password });
        
        if(response.error) {
            this.setState({ error: response.error });
        } else {
            await localStorage.setItem('token', response.token);
            await localStorage.setItem('user', JSON.stringify({
                userId: response.userId,
                username: response.username,
                isAdmin: response.isAdmin
            }));
            await this.props.updateState(response, true);
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