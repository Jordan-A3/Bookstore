import firebase from '../firestore'

const db = firebase.firestore()
const thisOne = db.collection("admins")

let user = []

thisOne.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        user.push(doc.data())
    });
})



export default function handleAuth(state = [], action) {
    const email = user.map(use => use.email)
    const password = user.map(use => use.senha)

    switch(action.type){
        case 'AUTH':
           return [email, password]
        default:
            return state
   }
}