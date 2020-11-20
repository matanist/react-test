import React, { Component } from 'react'
import axios from 'axios';
import User from './User';
export default class Users extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(data => this.setState({
            users: data.data
        }));
    }

    render() {

        return (
            <div>
                <ul>
                    {
                        this.state.users && this.state.users.map(user =>
                            <User key={user.id} user={user} />)
                    }
                </ul>
            </div>
        )
    }
}
