import React, { Component, useState, useEffect } from 'react'
import axios from "axios";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


function CreateNote(props) {

    const [users, setUser] = useState([]);
    const [date, setDate] = useState(new Date);
    const [nota, setNota] = useState([{
        title: '',
        content: '',
        author: '',
        date: date
    }]);
    const [tiltle, setTitle] = useState('');

    /* Variables de entorno  */
    const [urlNotas, setUrlNotas] = useState(process.env.REACT_APP_URI_NOTAS);
    const [urlNota, setUrlNota] = useState(process.env.REACT_APP_URI_NOTA);
    const [urlUsers, setUrlUsers] = useState(process.env.REACT_APP_URI_USERS);

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        getUsers();
        changeTitle();
        getNota();
        console.log(props.match.params.id);
    }, []);

    const getUsers = async () => {
        const data = await axios.get(urlUsers);
        setUser(data.data.map(e => e.username));
        //console.log(users);
    }

    const getNota = async () => {
        if (props.match.params.id != null) {
            const data = await axios.get(urlNota + props.match.params.id);
            setNota(data.data);
            console.log(nota);
        }
    }

    const addNota = async () => {
        if (props.match.params.id != null) {
            const res = await axios.put(urlNota + props.match.params.id, nota);
            console.log(res);
        } else {
            const res = await axios.post(urlNotas, nota);
            console.log(res);
        }

        window.location.href = '/';
    }

    onsubmit = (e) => {
        e.preventDefault();
        addNota();
        console.log(nota);
    }

    const onChange = (e) => {
        setNota({ ...nota, [e.target.name]: e.target.value, });
    }

    const onChangeDate = async (d) => {
        setDate(d);
        await setNota({ ...nota, date: d, });
        console.log(nota.date);
    }

    const changeTitle = () => {
        if (props.match.params.id != null) {
            console.log("Este es el modificar");
            setTitle("Modificar");
        } else {
            console.log("Este es el registrar");
            setTitle("Crear");
        }
    }



    return (
        <div className="container">
            <div className="col-md-6 offset-md-3 mt-3">
                <div className="card">
                    <div className="card-header bg-dark text-white text-center">
                        <h4>{tiltle} Nota</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <select name="author" id="selectUser" onChange={onChange} className="form-control">
                                    <option value="">Seleccione un usuario</option>
                                    {
                                        users.map(user => <option key={user} value={user}>{user}</option>)
                                    }
                                </select>
                            </div>

                            <div className="form-group">
                                <input className="form-control"
                                    type="text" name="title"
                                    id="titulo"
                                    value={nota.title}
                                    onChange={onChange}
                                    placeholder="Ingrese el Titulo" />
                            </div>

                            <div className="form-group">
                                <textarea className="form-control"
                                    type="text" name="content"
                                    id="content"
                                    value={nota.content}
                                    onChange={onChange}
                                    placeholder="Ingrese el contenido"></textarea>
                            </div>

                            <div className="form-group">
                                <DatePicker className="form-control" name="date" selected={date} onChange={onChangeDate}>
                                </DatePicker>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">
                                    Guardar
                             </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default CreateNote;
