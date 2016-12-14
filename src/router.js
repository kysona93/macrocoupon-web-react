import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./app/components/app";
import Home from './app/components/home/home';
import ProductEdit from './app/components/products/ProductEdit';
import NotFound from './app/components/commons/NotFound';
//import Search from './app/components/searchs/search.jsx';

const router = (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route path="/" component={Home}>
            <IndexRoute component={Home} />
            <Route path="product-edit(/:name)" component={ProductEdit} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);

export { router };