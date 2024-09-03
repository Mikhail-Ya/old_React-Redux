import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, textMessageActiveCreator} from "../../../Redux/dialogs-reduser";


let mapStateToProps = (state) => {

    return {
        message: state.dialogs.message,
        contact: state.dialogs.contact,
        messageText: state.dialogs.newTextMessage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        soobshenie: () => {
            dispatch(addMessageActionCreator())
        },
        textMessage: (text) => {
            dispatch(textMessageActiveCreator(text))
        },
    }
}
    const DialogsContener = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContener;
