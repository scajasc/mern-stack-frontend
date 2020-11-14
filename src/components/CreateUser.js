import React, { Component, useState } from 'react'
import axios from "axios";
import Users from './Users';



function CreateUser(props) {

    const [username, setUserName] = useState('');

    /* Variables de entorno  */
    const [urlUsers, setUrlUsers] = useState(process.env.REACT_APP_URI_USERS);


    const onsubmit = async (e) => {
        e.preventDefault();
        await axios.post(urlUsers, { username: username });
        setUserName('');
        props.reload();
    }

    return (
        <div className="card">
            <div className="card-header text-center">
                <h4>Crear usuario</h4>
            </div>
            <div className="card-body">
                <form onSubmit={onsubmit} >
                    <div className="form-group">
                        <input className="form-control"
                            type="text" name="name"
                            id="name"
                            value={username}
                            onChange={e => setUserName(e.target.value)}
                            placeholder="Ingrese el nombre de Usuario" />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;
