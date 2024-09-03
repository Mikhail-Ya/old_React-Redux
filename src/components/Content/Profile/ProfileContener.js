import React from 'react';
import {connect} from "react-redux";
import {addPostActionCreator, textPostActiveCreator, textThemePostActiveCreator} from "../../../Redux/profile-reduser";
import Profile from "./Profile";
import {textMessageActiveCreator} from "../../../Redux/dialogs-reduser";

let mapStateToProps = (state) => {

    return {
        newPostText: state.profilePost.newPostText,
        newThemePost: state.profilePost.newThemePost,
        posts: state.profilePost.posts
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        newPost: () => {
            dispatch(addPostActionCreator());
        },
        textPost: (text) => {
            dispatch(textPostActiveCreator(text))
        },
        themePost: (text) => {
            dispatch(textThemePostActiveCreator(text))
        }
    }
};

const ProfileContener = connect(mapStateToProps,mapDispatchToProps)(Profile);
export default ProfileContener;