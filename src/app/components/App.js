import React from "react";
import { connect } from "react-redux";
import Navigation from "./commons/Navigation";

class App extends React.Component {

    componentWillMount() {
        this.props.dispatch({
            type: 'HOME_PRODUCTS_LIST'
        })
    }

    render() {
        return (
            <div className="container">
                <div>
                    <Navigation />
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default connect()(App);
