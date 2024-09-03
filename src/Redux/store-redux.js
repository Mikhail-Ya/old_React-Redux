import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sideBarReducer from "./sideBar-reduser";
import usersReducer from "./users-reduser";

let reducers = combineReducers({
    profilePost: profileReducer,
    dialogs: dialogsReducer,
    sideBar: sideBarReducer,
    allusers: usersReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;