import React, { Component, Fragment } from 'react';

class RegisterForm extends Component {
    state = {
        email: '',
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
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

export default RegisterForm;