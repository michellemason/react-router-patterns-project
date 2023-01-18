import React from "react";
import { Link } from "react-router-dom";

function Color({hex, color, history}) {
    if (!hex) {
        history.push("/colors");
    }

    return (
        <div className="Color" style={{ backgroundColor: hex }}>
            <h1>This is {color}.</h1>
            <h3>Isn't it beautiful?</h3>
            <p><Link to="/">Go Back</Link></p>
        </div>
    );
}

export default Color;