import React from "react";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";
function Name(props) {
    return (
        <div className="row">
            <h2>{props.name}</h2>
            <span className={props.name} onClick={props.remove}>
        -
            </span>
        </div>
    );
}

export default Name;
