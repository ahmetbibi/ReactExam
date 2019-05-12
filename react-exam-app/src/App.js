import React from 'react';
import './App.css';
import UserNames from './components/UserNames';
import UserInfos from './components/UserInfos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userInfos: [],
      userCheck: false,
    };
  }

  getUsers = () => {
    fetch('http://uinames.com/api/?amount=5&ext')
      .then(data => data.json())
      .then(data => this.setState({ users: data, userCheck: true }))
      .catch(err => err);
  };

  handleClick = index => {
    const users = this.state.users;
    const user = users.filter((user, i) => {
      return index === i;
    });
    this.setState({ userInfos: user });
  };

  render() {
    return this.state.userCheck ? (
      <div className="main">
        <div className="nav-bar">
          <button onClick={this.getUsers} className="button">
            Get Users!
          </button>
        </div>
        <div>
          <UserNames users={this.state.users} handleClick={index => this.handleClick(index)} />
          <UserInfos user={this.state.userInfos} />
        </div>
      </div>
    ) : (
      <div className="main">
        <div className="nav-bar">
          <button onClick={this.getUsers} className="button">
            Get Users!
          </button>
        </div>
        <div>No user to show yet...</div>
      </div>
    );
  }
}

export default App;
