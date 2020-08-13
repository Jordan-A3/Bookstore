import firebase from '../firestore'

const db = firebase.firestore()
const thisOne = db.collection("books")



export default function NewOne (state = [], action) {
    switch(action.type){
        case 'ADD_BOOK':
           return [
               thisOne.doc(action.livro).set({
                   autor: action.autor,
                   livro:action.livro,
                   id: action.id,
                   sinopse: action.sinopse,
                   disponibilidade: action.status
               })
           ]
        default:
            return state
   }
}