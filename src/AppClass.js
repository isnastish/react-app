import React, {Component} from "react";

// this is a class component
export default class AppClass extends Component {
    // every functional component should have render function
    render() {
        return ( 
            <div>
                <h1>Hello World</h1>
                <a href="https://www.golang.org">Golang docs</a>
            </div>
        );
    }
}