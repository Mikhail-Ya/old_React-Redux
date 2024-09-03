import React from 'react';
import sie from './Messag.module.css';

const Msg = (props) => {
    return (
        <div className={sie.msg}>
        <p>{props.text}</p>
        </div>
    )
}

export default Msg;