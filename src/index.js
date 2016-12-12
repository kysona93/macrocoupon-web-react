import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from "react-redux";
import { store, history } from "./store.js";
import App from "./app/components/App";
import Home from './app/components/Home';
import ProductEdit from './app/components/ProductEdit';
import NotFound from './app/components/commons/NotFound';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="product-edit(/:name)" component={ProductEdit} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);