import React, {useState} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as updateBook from '../../actions/index'
import { useHistory } from 'react-router-dom'


const Reserv = (props) => {
    const history = useHistory()
    const book = localStorage.getItem('livro')

    const [cardId, setCardId] = useState('')

    function reserv(){
        props.updateBook(book, cardId)
        localStorage.clear()
        history.push('/catalogo')
    }
    return(
        <div className="container">
            <button onClick={reserv} >Reservar</button>
            <input 
                value={cardId} 
                onChange={e => setCardId(e.target.value)} 
                placeholder="Número do cartão da biblioteca."/>
        </div>
    )
}

const mapStateToProps = state => ({
    books: state
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(updateBook, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Reserv)