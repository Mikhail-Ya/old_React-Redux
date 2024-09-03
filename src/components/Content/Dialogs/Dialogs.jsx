import React from "react";
import e from './Dialogs.module.css'
import Message from "./Messages/Message";
import Contacts from "./Contacts/Contacts";



const Dialogs = (props) => {

    return (

            // let state = store.getState().dialogs;
            // let soobshenie = (textElement) => {
            //     store.dispatch({type: 'NEW_MESSAGE', newMessage: textElement});
            // }

                <div className={e.dialog}>
                    <Contacts contact={props.contact} />
                    <Message message={props.message}
                             soobshenie={props.soobshenie}
                             messageText={props.messageText}
                            textMessage={props.textMessage}/>
                </div>


    )
}
export default Dialogs;