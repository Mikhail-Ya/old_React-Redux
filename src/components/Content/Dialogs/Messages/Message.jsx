import React from 'react';
import sie from './Message.module.css';
import Msg from "./Messag/Mes";


const Message = (props) => {

     let onTextChange = (e) => {
        let text = e.target.value;
        props.textMessage(text);
    }

    let newMsg = () => {
        props.soobshenie();
    };
    let messagesElement = props.message.map( m => <Msg text={m.text}/>);
    return (
        <div className={sie.list}>
            <div className={sie.message}>
                {messagesElement}
            </div>
            <div className={sie.newMessage}>
                <textarea onChange={onTextChange} className={sie.textarea} value={props.messageText} />
                <button onClick={ newMsg } className={sie.btn}>Добавить</button>
            </div>

        </div>
    )

}

export default Message;