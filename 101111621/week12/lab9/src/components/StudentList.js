import React from 'react';
import axios from "axios";
import AddStudent from './AddStudent'
import DeleteStudent from './DeleteStudent'

class UserList extends React.Component {
    
    state = {
        users: []
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
            const users = res.data;
            this.setState({users})
        }).catch(err => console.log(err.message))
    }

    updateList(newStudent) {
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(res => {
            let users = res.data
            users.push(newStudent)
            console.log(users)
            this.setState({users})
        })
        .catch(err => console.log(err.message))
    }

    render() {
        return (
            <React.Fragment>
                <AddStudent update={this.updateList = this.updateList.bind(this)}/>
                <ul>
                    {this.state.users.map(user => {
                        return (
                            <li key={user.id}>
                                {user.name}
                                <DeleteStudent id = {user.id}/>
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        );
    }
}



export default UserList;