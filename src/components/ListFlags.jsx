import React from 'react';
import './../App.css';

function ListFlags(props) {

    return (
        <div className="random-flags">
            <img src={props.randomFlag}/>
        </div>
    );
}

export default ListFlags;
