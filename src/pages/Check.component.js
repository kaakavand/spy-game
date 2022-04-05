import React, { useEffect, useState } from "react";
import Rol from "../components/Rol.component";

function Check(props) {
    const [user, setUser] = useState([]);
    const [spy, setSpy] = useState([]);
    const [all, setAll] = useState([]);
    const [num, setNum] = useState(0);
    const [flag, setFlag] = useState(false);
    const [removeRol, setRemoveRol] = useState("");

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

            if (testArr.length === num) {
                break;
            }
        }
        setSpy(testArr);
        setFlag(!flag);
    }, [num]);

    useEffect(() => {
        let people = [];
        for (let i = 0; i < user.length; i++) {
            if (spy.includes(user[i])) {
                people.push({ name: user[i], spy: true, show: false });
            } else {
                people.push({ name: user[i], spy: false, show: false });
            }
        }

        people.sort();

        setAll(people);
    }, [flag]);

    const showRol = (e) => {
        e.preventDefault();
        const rol = e.target.value;
        const name = e.target.innerText
        if (rol === "true") {
            alert("جاسوس");
        } else {
            alert("شهروند");
        }

        const allFilter = all.filter(item => item.name !== String(name))
        setAll(allFilter)
    };

    return (
        <>
            <div className="check">
                {all.map((item) => (
                    <Rol
                        name={item.name}
                        rol={item.spy}
                        showRol={showRol}
                        removeRol={removeRol}
                    />
                ))}
            </div>
            <h5>salam</h5>
        </>
    );
}

export default Check;
