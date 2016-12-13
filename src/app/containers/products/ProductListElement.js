import React, { PropTypes } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router";
import { Button, Glyphicon } from 'react-bootstrap';

class ProductListElement extends React.Component{
    render() {
        const {product, showDeletePrompt} = this.props;
        return (
            <tr>
                <td>{Object.values(product.product_id)}</td>
                <td>{product.product_name}</td>
                <td>{product.product_price}</td>
                <td>{product.product_discount}</td>
                <td>{product.address_state}</td>
                <td>
                    <Link to={'product-edit/' + product.product_name}>
                        <Button bsSize="xsmall">
                            Edit <Glyphicon glyph="edit"/>
                        </Button>
                    </Link>
                </td>
                <td>
                    <Button bsSize="xsmall" className="product-delete" onClick={() => showDeletePrompt(product)}>
                        Delete <Glyphicon glyph="remove-circle"/>
                    </Button>
                </td>
            </tr>
        );
    }
}

// prop checks
ProductListElement.propTypes = {
    product: PropTypes.object.isRequired,
    showDeletePrompt: PropTypes.func.isRequired
};

export default connect()(ProductListElement)

