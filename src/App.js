import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import ProfileContener from "./components/Content/Profile/ProfileContener";
import DialogsContener from "./components/Content/Dialogs/DialogsContener";
import UsersConnect from "./components/Content/Users/UsersConect";


class App extends React.Component {
    render() {

        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Navbar/>
                    <div className="content">
                        <Route path='/profile' render={() => <ProfileContener/>}/>
                        <Route path='/dialogs' render={() => <DialogsContener/>}/>
                        <Route path='/users' render={() => <UsersConnect/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
