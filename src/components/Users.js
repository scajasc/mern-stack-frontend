
import React, { Component } from 'react'
import axios from "axios";
import CreateUser from './CreateUser';

export default class Users extends Component {

    state = {
        users: [],
        /* Variables de entorno  */
        urlNotas: process.env.REACT_APP_URI_NOTAS,
        urlNota: process.env.REACT_APP_URI_NOTA,
        urlUsers: process.env.REACT_APP_URI_USERS,
        urlUser: process.env.REACT_APP_URI_USER
    }

    async componentDidMount() {
        const data = await axios.get(this.state.urlUsers);
        this.setState({ users: data.data });
        //console.log(this.state.users);
    }

    reload = () => {
        this.componentDidMount();
    }

    deleteUser = async (id) => {
        await axios.delete(this.state.urlUser + id);
        this.reload();
    }

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-5 mt-4">
                        <CreateUser reload={this.reload}></CreateUser>
                    </div>
                    <div className="col-md-7">
                        <ul className="list-group mt-4">
                            {
                                this.state.users.map(user => {
                                    return <li className="list-group-item list-group-item-action" key={user._id} onDoubleClick={() => this.deleteUser(user._id)}>
                                        {user.username}
                                    </li>
                                })
                            }
                        </ul>
                    </div>

                </div>
            </div>

        )
    }
}
