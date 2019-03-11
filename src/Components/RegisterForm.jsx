import React, { Component, Fragment } from 'react';
import AuthService from '../Services/auth-service';
import { StateConsumer } from './Contexts/state-context';

class RegisterForm extends Component {
    state = {
        email: '',
        username: '',
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

        const { email, password, username } = this.state;
        const response = await RegisterForm.service.register({ email, password, username });

        if(response.errors) {
            this.setState({ error: response.errors[0].msg });
        } else {
            const loginResponse = await RegisterForm.service.login({ email, password });

            await localStorage.setItem('token', loginResponse.token);
            await localStorage.setItem('user', JSON.stringify({
                userId: loginResponse.userId,
                username: loginResponse.username,
                isAdmin: loginResponse.isAdmin
            }));
            await this.props.updateState(loginResponse, true);
        }
    }

    render() {
        return (
            <Fragment>
                <form>
                    <h2>Sign in</h2>
                    <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign in</button>
                </form>
                { this.state.error ? <div className="error">{this.state.error}</div> : null }
            </Fragment>
        )
    }
}

const RegisterWithContext = (props) => {
    return(
        <StateConsumer>
            {
                (state) => (
                    <RegisterForm
                        {...props}
                        isLogged={state.isLogged}
                        updateState={state.updateState}/>
                )
            }
        </StateConsumer>
    )
}

export default RegisterWithContext;