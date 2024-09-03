import React from "react";
import sie from "./Users.module.css";

import standartPhoto from "../../../img/UsersImg/modMi.gif";


class Users extends React.Component {

    componentDidMount() {
        this.props.daiPolzovateley();
    }

    render() {
        let totalPage = Math.ceil(this.props.totalUsers / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= totalPage; i++) {
            pages.push(i);
        }
        return <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={this.props.currentPage === p && sie.selectPage}>{p}</span>
                    })
                }
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div className={sie.cont}>
                        <img src={u.photos.small != null ? u.photos.small : standartPhoto} alt=""/>
                        {u.followed ?
                            <button onClick={() => {
                                this.props.Unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                this.props.Follow(u.id)
                            }}>Follow</button>}
                    </div>
                    <div className={sie.infoUser}>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>Город:</div>
                            <div>Страна:{u.uniqueUrlName}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    }
}
export default Users;
