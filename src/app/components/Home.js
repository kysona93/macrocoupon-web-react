import React from 'react';
import Product from './../containers/Product';
import Search from './commons/Search';
import DisplayProduct from './../containers/home/display_product.js';

export default class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <DisplayProduct />
                { /* <h1>Welcome Home Page !</h1>
                <div class="row">
                    <Search />
                </div>
                <div class="row">
                    <Product />
                </div> */}

            </div>
        );
    }
}

