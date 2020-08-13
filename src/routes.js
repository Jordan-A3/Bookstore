import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import store from './store'
import { Provider } from 'react-redux'

import NewBook from './pages/AddBook'
import Catalog from './pages/Catalog'
import Reserv from './pages/ReservArea'

export default function Routes(){

    return(
        <Provider store={store} >
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Catalog}/>
                    <Route path="/AdmArea" exact component={NewBook}/>
                    <Route path="/reserva" exact component={Reserv}/>
                </Switch>
            </BrowserRouter>
        </Provider>
            
    )
    
}