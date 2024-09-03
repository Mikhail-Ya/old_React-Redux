import * as serviceWorker from './serviceWorker';
import store from "./Redux/store-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";


// let rerenderEnterTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
// }
// rerenderEnterTree(store.getState());
// store.subscribe( () => {
//     let state = store.getState();
//     rerenderEnterTree(state);
// });
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
