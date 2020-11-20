import React, { Component } from 'react'
import axios from 'axios';
import UserDetail from './UserDetail';

export default class User extends Component {
    state = {
        user: {}
    }
    componentDidMount() {
        //console.log()
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.user.id}`).then(data => this.setState({
            user: data.data
        }));
    }

    render() {
        return (
            <li><UserDetail user={this.state.user} /></li>
        )
    }
}
