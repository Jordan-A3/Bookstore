import React, { useState, useEffect } from "react";

import './styles.css'
import { useHistory } from "react-router-dom";

import firebase from '../../firestore'

const Catalog = () => {
    const history = useHistory()


    const db = firebase.firestore()
    const thisOne = db.collection("books")

    const [books, setBooks] = useState([])

    useEffect(() => {
        thisOne.get().then(function(querySnapshot) {
            const data = querySnapshot.docs.map(doc => doc.data())
            setBooks(data)
        })
    },[])

    

    function reservBook(livro){
        history.push('/reserva')
        localStorage.setItem('livro', livro)
    }

    function AdmArea(){
        history.push('/admArea')
    }

    return(
        <div className="container-" >
            <header><h1>Escolha um livro</h1></header>
            
            <ul>
                {books.map(book => (
                        <li key={book.id} > 
                            
                            <strong> Livro: </strong>
                            <span> {book.livro} </span>
                            <strong> Autor(a): </strong>
                            <span> {book.autor} </span>
                            <strong> Status: </strong>
                            <span> {book.disponibilidade} </span>
                            {book.disponibilidade === "Disponivel"
                                ? <button onClick={() => reservBook(book.livro)} >Reservar</button>
                                :(
                                    <h3>Não é possivel reservar este livro</h3>
                                )
                            }
                        </li>
                ))}
            </ul>
            <button id='admButton' onClick={AdmArea} >Sou um admnistrador</button>
        </div>
    )
}

export default Catalog
