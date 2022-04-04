import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Name from "../components/Name.component";

function Players(props) {
    const [name, setName] = useState("");
    const [player, setPlayer] = useState([]);

    const addPlayer = async (e) => {
        e.preventDefault();
        const arr = player.concat(name);
        setPlayer(arr);
        setName("");
    };

    useEffect(() => {
        setPlayer(JSON.parse(localStorage.getItem('players')))
    }, []);

    useEffect(() => {
        localStorage.setItem("players", JSON.stringify(player));
    }, [player]);

    const removeName = ({ target }) => {
        const name = target.className;
        const newArr = player.filter((item) => item !== name);
        setPlayer(newArr);
    };

    return (
        <div className="container_players">
            <div style={{ width: "100%" }}>
                <input
                    type="text"
                    placeholder="نام بازیکن ..."
                    onChange={({ target }) => setName(target.value)}
                    value={name}
                />
                <Button
                    variant="contained"
                    type="submit"
                    className="button_player"
                    onClick={addPlayer}
                >
                    افزودن بازیکن
                </Button>
                <div className="box">
                    {player.map((item) => (
                        <Name name={item} remove={removeName} />
                    ))}
                </div>
            </div>

            <Button
                variant="contained"
                type="submit"
                className="button_player_next"
            >
                شروع بازی
            </Button>
        </div>
    );
}

export default Players;
