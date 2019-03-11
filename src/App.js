import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { DefaultState, StateProvider } from './Components/Contexts/state-context';
import './styles.css';
import IndexGuest from './Views/IndexGuest';
import IndexUser from './Views/IndexUser';
import User from './Views/User';

class App extends Component {
  state = DefaultState;

  updateState = ({ isAdmin, username, userId }, isLogged) => {
    this.setState({
      isLogged,
      isAdmin,
      username,
      userId
    });
  }

  render() {
    return (
      <Router>
        <StateProvider value={{ userId: this.state.userId, username: this.state.username, isAdmin: this.state.isAdmin, isLogged: this.state.isLogged, updateState: this.updateState }}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={this.state.isLogged ? IndexUser : IndexGuest} />
              <Route path="/user" component={User} />
            </Switch>
          </div>
        </StateProvider>
      </Router>
    );
  }
}

export default App;
