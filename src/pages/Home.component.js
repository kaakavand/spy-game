import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { user } from "../config/user.config";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../config/routes.config";

function Home() {
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const navigateLogin = (e) => {
        e.preventDefault();
        if (userName === user.USER && pass === user.PASS) {
            navigate(PATHS.PLAYERS);
        }
    };

    return (
        <div className="container">
            <h1>خوش آمدید</h1>
            <figure>
                <img src="" alt="" />
            </figure>
            <form autocomplete="off" onSubmit={navigateLogin}>
                <TextField
                    id="outlined-basic"
                    label="نام کاربری"
                    variant="outlined"
                    className="input"
                    onChange={({ target }) => setUserName(target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="رمز عبور"
                    variant="outlined"
                    className="input"
                    onChange={({ target }) => setPass(target.value)}
                />
                <Button variant="contained" type="submit" className="button">
                    وارد شوید
                </Button>
            </form>
        </div>
    );
}

export default Home;
