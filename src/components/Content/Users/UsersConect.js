import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {daiPolzovateley, setUsersAC, userFollowAC, usersUnfollowAC} from "../../../Redux/users-reduser";


let mapStateToProps = (state) => {
     return {
        users: state.allusers.users,
        pageSize: state.allusers.pageSize,
        totalUsers: state.allusers.totalUsers,
        currentPage: state.allusers.currentPage
     }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         Follow: (userId) => {
//             dispatch(userFollowAC(userId));
//         },
//         Unfollow: (userId) => {
//             dispatch(usersUnfollowAC(userId));
//         },
        // setUsers: (users) => {
        //     dispatch(setUsersAC(users));
        // }
//     }
// }

const UsersConnect = connect(mapStateToProps,{userFollowAC,usersUnfollowAC,daiPolzovateley})(Users);

export default UsersConnect;
