import React from "react";
import Player from "./Player";
import Indian from "./Indian";

function App() {

    const flag = true;

    if (flag) {
        return (
            <div>
                <Player />
                <Indian />
            </div>
        );
    }
    else {
        return (
            <div>
                <h1>No Data Available</h1>
            </div>
        );
    }

}

export default App;