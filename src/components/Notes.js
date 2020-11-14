import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

function Notes() {

    const [notas, setNotas] = useState([]);

    /* Variables de entorno  */
    const [urlNotas, setUrlNotas] = useState(process.env.REACT_APP_URI_NOTAS);
    const [urlNota, setUrlNota] = useState(process.env.REACT_APP_URI_NOTA);

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        getNotas();
    }, []);

    const getNotas = async () => {
        const data = await axios.get(urlNotas);
        setNotas(data.data);
    }

    const deleteNota = async (id) => {
        const data = await axios.delete(urlNota + id);
        console.log(data);
        getNotas();
    }

    return (
        <div className="container">
            <div className="row">
                {
                    notas.map(nota => {
                        return <div className="col-md-4 p-3">
                            <div className="card" key={nota._id} >
                                <div className="card-header bg-dark text-white d-flex justify-content-between">
                                    <h4>{nota.title}</h4>
                                    <Link className="btn btn-secondary" to={"/edit/" + nota._id}>
                                        Editar
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p>
                                        {nota.content}
                                    </p>
                                    <p>
                                        <strong>{nota.author}</strong>
                                    </p>
                                    <p>
                                        {format(nota.date)}
                                    </p>
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-danger" onClick={() => deleteNota(nota._id)} >
                                        Eliminar
                                </button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )

}

export default Notes;
