export function addBook(autor, livro, status, sinopse){
    return{
        type:"ADD_BOOK",
        autor,
        livro,
        status,
        sinopse,
        id:Math.random()
    }
}

export function getBook(){
    return{
        type:"GET_BOOK"
    }
}

export function updateBook(livro, cardId){
    return{
        type:"UP_BOOK",
        livro,
        cardId
    }
}

export function handleAuthorization(){
    return{
        type:"AUTH"
    }
}