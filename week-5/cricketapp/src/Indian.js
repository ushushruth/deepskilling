import React from "react";

function Indian() {
    const players = [
        "Virat",
        "Rohit",
        "Gill",
        "Rahul",
        "Hardik",
        "Jadeja"
    ];

    const [odd1, even1, odd2, even2, odd3, even3] = players;

    const T20players = [
        "Virat",
        "Rohit",
        "Hardik"
    ];

    const RanjiPlayers = [
        "Pujara",
        "Rahane",
        "Saha"
    ];
    const mergedPlayers = [...T20players, ...RanjiPlayers];

    return (
        <div>

            <h2>Odd Players</h2>
            <ul>
            <li>{odd1}</li>
            <li>{odd2}</li>
            <li>{odd3}</li>
            </ul>

            <h2>Even Players</h2>
                        <ul>
                            <li>{even1}</li>
            <li>{even2}</li>
            <li>{even3}</li>
                        </ul>
            

            <h2>List of Indian Players Merged:</h2>

            {mergedPlayers.map((player, index) => (
               <ul>
                <li key={index}>{player}</li>
                </ul>
                
            ))}

        </div>
    );
}

export default Indian;