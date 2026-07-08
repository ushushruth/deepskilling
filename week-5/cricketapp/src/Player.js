import React from "react";

function Player() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 82 },
        { name: "Shubman Gill", score: 75 },
        { name: "KL Rahul", score: 65 },
        { name: "Hardik Pandya", score: 68 },
        { name: "Ravindra Jadeja", score: 72 },
        { name: "Rishabh Pant", score: 55 },
        { name: "Mohammed Shami", score: 40 },
        { name: "Jasprit Bumrah", score: 80 },
        { name: "Kuldeep Yadav", score: 50 },
        { name: "Mohammed Siraj", score: 77 }
    ];

    const below70 = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>
            <ul>

            {players.map((player, index) => (
                <li key={index}>
                    {player.name} - {player.score}
                </li>
            ))}
            </ul>

<h2> List of Players having Scores Less than 70</h2>
<ul>

            {below70.map((player, index) => (
                <li key={index}>
                    {player.name} - {player.score}
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Player;