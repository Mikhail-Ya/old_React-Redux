import React from "react";
import clas from "./Contact.module.css";
import {NavLink} from "react-router-dom";

const Contact = (props) => {
    let nomer = "/dialogs/" + props.id;

    return (
        <div className={clas.item}>
            <NavLink to={nomer} activeClassName={clas.active}>
            <img src={props.avatar} alt=" " title={props.name}/>

                {props.name}
            </NavLink>
        </div>
    )
}
export default Contact;