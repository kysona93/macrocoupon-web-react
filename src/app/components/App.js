import React from "react";
import Home from './Home.js';
//import Navigation from "./commons/Navigation";

export default class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Home />
                {/* } <div class="row">
                    <Navigation />
                </div>
                <div class="row">
                    {this.props.children}
                </div> */}
            </div>
        );
    }
}