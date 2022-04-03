import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function Home() {
    return (
        <div className="container">
            <h1>خوش آمدید</h1>
            <figure>
                <img src="" alt="" />
            </figure>
            <form autocomplete="off">
                <TextField
                    id="outlined-basic"
                    label="نام کاربری"
                    variant="outlined"
                    className="input"
                />
                <TextField
                    id="outlined-basic"
                    label="رمز عبور"
                    variant="outlined"
                    className="input"
                />
                <Button variant="contained" type="submit" className="button">
                    وارد شوید
                </Button>
            </form>
        </div>
    );
}

export default Home;
