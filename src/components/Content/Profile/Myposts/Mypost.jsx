import React from 'react';
import sie from './Mypost.module.css';


const Mypost = (props) => {

    let onPostChange = (e) => {
        let text = e.target.value;
        props.textPost(text);
    };
    let themePostChange = (e) => {
        let text = e.target.value;
        props.themePost(text);
    };
    let myPost = () => {
        props.newPost();
    };

    return (
        <div className={sie.div}>
            <h5>New post</h5>
            <div className={sie.vvod}>
                <h6>Тема:</h6>
                <textarea className={sie.tema} onChange={themePostChange} value={props.newThemePost}/>
                <h6>Сообщение:</h6>
                <textarea className={sie.text} onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={myPost} className={sie.btn}>добавить</button>
            </div>
        </div>
    )
}
export default Mypost;