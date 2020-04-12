import React from 'react'
import axios from "axios";
import { Component } from "react";

class AddStudent extends Component {

    state = {
        name: ""
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault()
        axios.post('http://jsonplaceholder.typicode.com/users', {name: this.state.name})
        .then(res => this.props.update({name: res.data.name, id: res.data.id}))
        .catch(err => console.log(err.message))
    };

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </React.Fragment>
        )
    }

}

export default AddStudent;