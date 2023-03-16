import React from 'react';
import './../App.css';
import flags from './../flags';

function Body() {

    const keys = Object.keys(flags);
    const randIndex = Math.floor(Math.random() * keys.length);
    const randKey = keys[randIndex];
    const nameFlag = flags[randKey];
    let src = "https://flagcdn.com/w320/" + randKey + ".jpg";

    return (
        <div className="random-flags">
            <img src={src} alt={nameFlag}/>
        </div>
    );
}

export default Body;
