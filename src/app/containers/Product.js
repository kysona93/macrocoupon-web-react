import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Table, Button, Glyphicon } from "react-bootstrap";
import ProductListElement from './products/ProductListElement';
import DeletePrompt from './../components/commons/DeletePrompt';

class Product extends React.Component{
    constructor(props){
        super(props);

        // default ui local state
        this.state = {
            delete_show: false,
            delete_product: {}
        };

        this.showDeletePrompt = this.showDeletePrompt.bind(this);
        this.hideDeletePrompt = this.hideDeletePrompt.bind(this);
        this.productDelete = this.productDelete.bind(this);
    }
    /*componentWillMount() {
        this.props.dispatch({
            type: 'HOME_PRODUCTS_LIST'
        })
    }*/

    // show the delete product prompt
    showDeletePrompt(product) {
        // change the local ui state
        this.setState({
            delete_show: true,
            delete_product: product
        });
    }
    // delete the user
    productDelete() {
        // delete the product
        /*this.props.dispatch({
            type: 'USERS_DELETE',
            user_id: this.state.delete_user.id,
        });*/

        // hide the delete prompt
        this.hideDeletePrompt();
    }

    // hide the delete product prompt
    hideDeletePrompt() {
        // change the local ui state
        this.setState({
            delete_show: false,
            delete_product: {}
        });
    }

    render() {
        return (
            <div>
                <Table bordered hover responsive striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Address</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.products.map((product, i) => {
                        if(product.product_id === undefined){
                            this.props.dispatch({
                                type: 'HOME_PRODUCTS_LIST'
                            })
                        }else {
                            return (
                                <ProductListElement key={i} product={product} showDeletePrompt={this.showDeletePrompt} />
                            );
                        }
                    })
                    }
                    </tbody>
                </Table>

                <DeletePrompt show={this.state.delete_show} product={this.state.delete_product}
                              hideDeletePrompt={this.hideDeletePrompt} productDelete={this.productDelete} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Product);
