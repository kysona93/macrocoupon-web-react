import React from 'react';
import Product from '../../containers/Product';
import Search from '../commons/Search';
import DisplayProduct from './../../containers/commons/display_product.js';
import Navigation from'./../shared_component/Navigation/Navigation';
import TestSearch from '../searchs/search.jsx';
import Header from './../shared_component/Navigation/Header';
import Inedex from './../shared_component/Footer/index';
import Cart from './../shared_component/Diamond_component.jsx';
import SearchComponent from './../searchs/search.jsx';

export default class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Navigation/>
                <SearchComponent />
                <TestSearch />
                <DisplayProduct />
                { /* <h1>Welcome Home Page !</h1>
                <div><Search/></div>
                 <TestSearch />
                 <Cart/>
                 */}
            </div>
        );
    }
}

