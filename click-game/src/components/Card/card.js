import React from "react";


function card(props) {
    return (
        <div classname="card">
            <div className="image" key={props.id}
            onClick={() => props.handleClick(props.id, props.clicked)}>
                <img   src={props.image} alt={props.name} />
            </div>
        </div>
    );
}

export default card;