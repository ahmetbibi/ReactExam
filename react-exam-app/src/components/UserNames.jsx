import React from 'react';

class UserNames extends React.Component {
  render() {
    return (
      <div className="user-names">
        {this.props.users.map((user, i) => {
          return (
            <div key={i}>
              <p onClick={() => this.props.handleClick(i)}>{user.name}</p>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserNames;
