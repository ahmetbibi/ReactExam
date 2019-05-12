import React from 'react';

class UserInfos extends React.Component {
  render() {
    // const user = this.props.users
    return (
      <div>
        {this.props.user.map((user, i) => {
          return (
            <div key={i}>
              <img src={user.photo} alt="img" />
              <p>
                <strong>
                  {user.name} {user.surname}
                </strong>
              </p>
              <p>Email: {user.email}</p>
              <p>Gender: {user.gender}</p>
              <p>Age: {user.age}</p>
              <p>Country of Origin: {user.region}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserInfos;
