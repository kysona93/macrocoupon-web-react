import React from 'react';
import { connect } from 'react-redux';
import { HelpBlock, Form, FormGroup, Col, Button, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import Product from './../../containers/Product';

class Search extends  React.Component{
    constructor(props){
        super(props);

        this.formSubmit = this.formSubmit.bind(this);

    }
    formSubmit(value){
        //add to api
        this.props.dispatch({
            type: 'PRODUCTS_SEARCH_LIST',
            product:{
                address_state: value.address_state,
                product_name: value.product_name
            }
        });

        //add to state
        this.props.dispatch({
            type: 'PRODUCTS_SEARCH',
            product:{
                address_state: value.address_state,
                product_name: value.product_name
            }
        });
    }

    render(){
        return(
            <div>
                <Form horizontal onSubmit={this.props.handleSubmit(this.formSubmit)}>
                    <Field name="address_state" component={Search.renderAddressState} />
                    <Field name="product_name" component={Search.renderProductName} />
                    <FormGroup>
                        <Col smOffset={2} sm={8}>
                            <Button bsStyle="success" type="submit" disabled={this.props.invalid || this.props.submitting}>SEARCH</Button>
                        </Col>
                    </FormGroup>
                </Form>

                <Product />
            </div>

        );
    }
    static renderAddressState(props){
        return(
                <FormGroup>
                    <Col sm={2}>Location</Col>
                    <Col sm={8}>
                        <InputGroup>
                            <FormControl {...props.input} id="address_state" type="text" placeholder="Location ..." />
                            <InputGroup.Addon>
                                <Glyphicon glyph="map-marker" />
                            </InputGroup.Addon>
                        </InputGroup>
                    </Col>
                </FormGroup>
            );

    }

    static renderProductName(props){
        return(
                <FormGroup validationState={props.meta.touched ? null :
                    (props.meta.error ? 'error' : 'success')}>
                    <Col sm={2}>Product Name</Col>
                    <Col sm={8}>
                        <FormControl {...props.input} id="product_name" type="text" placeholder="eg. smart phone ..." />
                        <FormControl.Feedback />
                        <HelpBlock>
                            {props.meta.touched && props.meta.error ? props.meta.error : null}
                        </HelpBlock>
                    </Col>
                </FormGroup>
            );
    }
}

Search = reduxForm({
    form: 'product-edit',
    validate: function (value) {
        const errors = {};
        if(!value.product_name){
            errors.product_name = 'Product name is required !';
        }else if(!value.address_state){
            errors.address_state = 'Location name is required !';
        }
        return errors;
    }
})(Search);

function mapStateToProps(state){
    let form_data = {
        address_state: '',
        product_name: ''
    };
    return {
        initialValues: form_data
    };
}

export default connect(mapStateToProps)(Search);
