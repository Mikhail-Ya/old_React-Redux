import React from "react";
import sel from "./profInfo.module.css";

const ProfInfo = () => {
    return (
        <div className={sel.T_info}>
            <div className={sel.avatar}>
                <img src="https://cs13.pikabu.ru/avatars/2694/x2694935-552405089.png" alt=""/>
            </div>
            <div className={sel.profInfo}>
                description
            </div>
        </div>
    )
}
export default ProfInfo;