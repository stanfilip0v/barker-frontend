import React from 'react';

function withData(Component, users, serviceMethod, followUser) {
    return class extends React.Component {
        state = {
            users: users,
            username: ''
        }

        followUser = async (userId) => {
            await followUser(userId);
            const users = await serviceMethod();
            this.setState({
                users
            });
        }

        async componentDidMount() {
            if (this.props.pathInfo === undefined) {
                const users = await serviceMethod();
                this.setState({
                    users
                });
            } else {
                const username = this.props.pathInfo.location.pathname.split('/')[3];
                const users = await serviceMethod(username);

                this.setState({
                    username,
                    users
                });
            }
        }

        render() {
            const { users, username } = this.state;

            return (<Component users={users} followUser={this.followUser} username={username}/>)
        }
    }
}

export default withData;