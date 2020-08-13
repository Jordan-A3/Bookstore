import firebase from '../firestore'

const db = firebase.firestore()
const thisOne = db.collection("books")

let books = []

thisOne.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        books.push(doc.data())
    });
})

export default function upBooks(state = books, action) {
    switch(action.type){
        case 'UP_BOOK':
            const updateBook = thisOne.doc(action.livro);

            updateBook.update({
                disponibilidade:"indisponivel",
                cardId: action.cardId
            })

           return [
               ...state
        ]
        default:
            return state
   }
}