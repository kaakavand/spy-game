import React, { useEffect, useState } from "react";

function Check() {
    const [user, setUser] = useState([]);
    const [spy, setSpy] = useState([]);
    const [num, setNum] = useState(0);

    useEffect(() => {
        const players = JSON.parse(localStorage.getItem("players"));
        setUser(players);
        if (players.length === 3) {
            setNum(1);
        } else if (players.length === 4 || players.length === 5) {
            setNum(2);
        } else if (players.length === 6 || players.length > 6) {
            setNum(3);
        }
    }, []);

    useEffect(() => {
        function random_item(items) {
            return items[Math.floor(Math.random() * items.length)];
        }
        let testArr = [];
        for (let i = 0; i < user.length; i++) {
            let nameUser = random_item(user);
            if (!testArr.includes(nameUser)) {
                testArr.push(nameUser);
            }

            if (testArr.length === 2) {
                break;
            }
        }
        setSpy(testArr);
    }, [num]);

    console.log(spy);
    console.log(user);

    return (
        <div className="check">
            <span></span>
        </div>
    );
}

export default Check;
