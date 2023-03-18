import React from 'react';
import {useMemo} from "react";
import './../App.css';
import flags from './../flags';
import ListFlags from "./ListFlags";

function Body() {

    const keys = Object.keys(flags);
    const randIndex = Math.floor(Math.random() * keys.length);
    const randKey = keys[randIndex];
    const nameFlag = flags[randKey];
    let src = "https://flagcdn.com/w320/" + randKey + ".jpg";

    const nbFlags = [0,1,2,3];
    const randFlags = useMemo(() => Math.floor(Math.random() * 4), []);

    const getFlags = (index) => {
        if (index === randFlags) {
            return <ListFlags key={index} randomFlag={src} flag={src}/>
        }
        return <ListFlags key={index} randomFlag={src}/>
    };

    return (
        <div className="random-flags">
            <div className="grid-colors">
                {nbFlags.map((number) =>
                    getFlags(number)
                )}
            </div>
        </div>
    );
}

export default Body;
