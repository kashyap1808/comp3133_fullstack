import React from 'react'
import axios from "axios";
import { Component } from "react";

class DeleteStudent extends Component {

    state = {
    }

    handleSubmit = event => {
        event.preventDefault()
        axios.delete(`http://jsonplaceholder.typicode.com/users/${this.props.id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err.message))
    };

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">delete</button>
                </form>
            </React.Fragment>
        )
    }

}

export default DeleteStudent;