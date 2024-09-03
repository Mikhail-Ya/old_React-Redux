import React from 'react';
import clas from './Post.module.css';

const Post = (props) => {

    return (
        <div className={clas.post}>
            <span>{props.name}</span>
            <img src="https://cs8.pikabu.ru/avatars/2498/x2498396-1221354000.png" alt=""/>
            <div className={clas.tema}>тема:<b>{props.head}</b></div>
            <p>{props.text}</p>
            <div className={clas.nrav}>понравилось: {props.nrav} пользователям.</div>
        </div>

    )
}
export default Post;