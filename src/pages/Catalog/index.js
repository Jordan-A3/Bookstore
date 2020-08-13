import React from "react";

import * as getBook from '../../actions/index'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import './styles.css'
import { useHistory } from "react-router-dom";


const Catalog = (props, state) => {
    const history = useHistory()
    function getBooks(){
            props.getBook()
        }

    function reservBook(livro){
        history.push('/reserva')
        localStorage.setItem('livro', livro)
    }

    

    const allBooks = props.books.getBooks

    return(
        <div className="profile-container" >
            <header><h1>Escolha um livro</h1></header>
            
            <button onClick={getBooks} >Ver Livros</button>
            <ul>
                {allBooks.map(book => (
                        <li key={book.id} > 
                            
                            <strong> Livro: </strong>
                            <span> {book.livro} </span>
                            <strong> Autor(a): </strong>
                            <span> {book.autor} </span>
                            <strong> Status: </strong>
                            <span> {book.disponibilidade} </span>
                            <div className="sinopse" >   
                                <p> {book.sinopse} </p>
                            </div>
                            {book.disponibilidade === "Disponivel"
                                ? <button onClick={() => reservBook(book.livro)} >Reservar</button>
                                :(
                                    <h3>Não é possivel reservar este livro</h3>
                                )
                            }
                        </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    books : state
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(getBook, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
