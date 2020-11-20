import React, { Component } from 'react'
import axios from 'axios';
export default class UserDetail extends Component {
    componentDidMount() {
        //console.log(this.props.user.id);
        this.props.user.id && axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.user.id}`).then(data => this.setState({
            currentUser: data.data
        }));
    }

    render() {
        return (
            <div>
                {this.props.user.id}-{this.props.user.name}
            </div>
        )
    }
}
