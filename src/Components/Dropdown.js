import React from "react";

export const Dropdown = ({ modes, onModeChange, isStarted, onStartButtonClick }) => {

    return (
        <div className="dropdown-form">
            <select className='dropdown' name="modes" onChange={e => { onModeChange(e.target.value) }}>
                <option value='choose'>Pick mode</option>
                {modes && modes.map((mode, i) => <option key={i} value={mode}>{mode}</option>)}
            </select>
            {isStarted ?
                <button className='button' onClick={() => onStartButtonClick(false)} style={{ backgroundColor: 'red' }}>Stop</button> :
                <button className='button' onClick={() => onStartButtonClick(true)}>Start</button>}
        </div>
    )
}