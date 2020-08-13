import React, {useState} from 'react'

import { connect } from 'react-redux'

import * as addBook from '../../actions/index'

import {bindActionCreators} from 'redux'

import './styles.css'

const NewBook = (props) =>{
    const [auth, setAuth] = useState('No authorized')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [autor, setAutor] = useState('')
    const [livro, setLivro] = useState('')
    const [sinopse, setSinopse] = useState('')
    const [status, setStatus] = useState("Disponivel")


    const AuthEmail = `${props.books.handleAuth[0]}`
    const AuthPassword =  `${props.books.handleAuth[1]}`

    function addNewBook(){
        props.addBook(autor, livro, status, sinopse)
    }

    async function handleAuthorizatio(){
        await props.handleAuthorization()
        if(email === AuthEmail && password === AuthPassword){
            setAuth("authorized")
        }else{
            return;
        }
    }


    if(auth === 'authorized'){
            return(
            <div className="container">
                <header>
                    <h1>Adicionar livro ao catalogo</h1>
                </header>
                <form>
                    <input placeholder="Livro" value={livro} onChange={(e) => setLivro(e.target.value)}/>

                    <input placeholder="Autor" value={autor} onChange={(e) => setAutor(e.target.value)} />

                    <textarea 
                        placeholder="Sinopse" 
                        value={sinopse}
                        onChange={e => setSinopse(e.target.value)}
                        maxLength='300'
                    />
                    <select name="Disponibilidade" id="Disponibilidade" value={status}onChange={(e) => setStatus(e.target.value)}>
                        <option value="Disponivel">Disponivel</option>
                        <option value="Indisponivel">Indisponivel</option>
                    </select>
                </form>
                
                <button onClick={addNewBook} >Send</button>
            </div>
        )
    }

    if(auth==='No authorized'){
        return(
            <div className="container">
                <header>
                    <h1> Seja bem-vindo</h1>
                </header>

                <div className="content" >
                    <h3>Faça logon para ter acesso a recursos de admnistrador</h3>
                </div>

                <form id="logon">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"  />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" type="password"  />
                    
                </form>
                    <button onClick={handleAuthorizatio}>Enviar</button>
            </div>
        )
    }

    
}

const mapStateToProps = state => ({
    books: state
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(addBook, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewBook)