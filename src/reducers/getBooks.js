import firebase from '../firestore'

const db = firebase.firestore()
const thisOne = db.collection("books")

let books = []

thisOne.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        books.push(doc.data())
    });
})

export default function getBooks(state = books, action) {
    switch(action.type){
        case 'GET_BOOK':
            console.log(state)
           return [
               ...state
        ]
        default:
            return state
   }
}