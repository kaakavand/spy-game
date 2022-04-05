import { Button } from "@mui/material";
import React from "react";

function Rol(props) {
    return (
        <Button
            variant="contained"
            id="button_rol"
            className={props.name}
            onClick={props.showRol}
            value={props.rol}
        >
            {props.name}
        </Button>
    );
}

export default Rol;
