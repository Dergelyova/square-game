import React, { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";
import { Board } from "./Board";

export const Game = () => {
    const [gameModes, setGameModes] = useState([]);
    const [activeMode, setActiveMode] = useState('choose');
    const [isStarted, setIsStarted] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://demo7919674.mockable.io').then(async res => {
            const json = await res.json();
            setGameModes(json);
        }
        ).catch(error => {
            setError(`There was an error:  ${error}`);
        });;
    }, []);

    return (
        <div className="container">
            <Dropdown modes={gameModes.map(item => item.name)} onModeChange={setActiveMode} onStartButtonClick={setIsStarted} isStarted={isStarted} />
            {activeMode !== 'choose' && <Board mode={gameModes.find((item) => item.name === activeMode)} isStarted={isStarted} />}
            {error && <h2>Something went wrong</h2>}
        </div>
    )
}