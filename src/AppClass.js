import React, {Component} from "react";
import './AppClass.css'

// this is a class component
export default class AppClass extends Component {
    // every functional component should have render function
    render() {
        return ( 
            <div>
                <h1 className="h1-yellow">Hello World</h1>
                <a href="https://www.golang.org">Golang docs</a>
            </div>
        );
    }
}