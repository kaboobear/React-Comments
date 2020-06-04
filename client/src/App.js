import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import $ from 'jquery'

import Header from './components/header'
import Items from './components/items'
import Login from './components/login'
import Register from './components/register'
import OneItem from './components/itemPage'
import MobMenu from './components/mobileMenu'

import store from './store';
import {ToastContainer} from 'react-toastify'
import {Provider} from 'react-redux';
import {loadUser} from './actions/authActions'
import {setCart} from './actions/cartActions'

class App extends React.Component {
    componentDidMount() {
        store.dispatch(loadUser())
        if (JSON.parse(localStorage.getItem('items'))) {
            store.dispatch(setCart(JSON.parse(localStorage.getItem('items')), localStorage.getItem('total'), localStorage.getItem('count')))
        }

        $(".ham")
            .click(function () {
                $(".mobile-nav").toggleClass('active');
            });

        $(".close").click(function () {
            $(".mobile-nav").toggleClass('active');
        });
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="wrapper">
                        <Header/>

                        <div className="content-section">

                            <div className="container">
                                <Route path='/' exact strict component={Items}/>
                                <Route
                                    path='/admin'
                                    exact
                                    strict
                                    render={() => {
                                    return <Redirect to="/admin/products"/>
                                }}/>
                                <Route
                                    path='/item/:id'
                                    strict
                                    exact
                                    render=
                                    {({match})=><OneItem id={match.params.id}/>}/>

                                <Route path='/login' exact strict component={Login}/>
                                <Route path='/register' exact strict component={Register}/>
                            </div>
                        </div>

                        <ToastContainer containerId={'one'}/>
                        <MobMenu/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
