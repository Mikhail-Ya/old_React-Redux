import React from 'react';
import e from './Contacts.module.css';
import Contact from "./Contact/Contact";

const Contacts = (props) => {
    let contactElement = props.contact.map( c => <Contact name={c.name} id={c.id} avatar={c.avatar} activeClassName={e.active}/>);
    return (
        <div className={e.list}>
            {contactElement}
        </div>
    )
}

export default Contacts;