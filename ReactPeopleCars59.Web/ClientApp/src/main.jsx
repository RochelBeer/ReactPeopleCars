import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom';
import AddPerson from './AddPerson';
import AddCar from './AddCar';
import { Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import DeleteCars from './DeleteCars';
import Layout from './Layout';




ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Layout>
                <Route exact path='/' component={App} />
                <Route exact path='/AddPerson' component={AddPerson} />
                <Route exact path='/AddCar/:id' component={AddCar} />
                <Route exact path='/DeleteCars/:id' component={DeleteCars} />
         </Layout>
    </BrowserRouter>
)
