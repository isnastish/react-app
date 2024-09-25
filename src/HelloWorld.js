import React, { Fragment } from "react";
import './AppClass.css';

// this is a functional component
function HelloWorld() {
    return (
        <Fragment>
            <hr></hr>
            <h1 className="h1-green">Hello World</h1>
        </Fragment>
    )
}

export default HelloWorld;