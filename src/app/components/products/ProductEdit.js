import React from 'react';
import { connect } from 'react-redux';
import { PageHeader, HelpBlock, Form, FormGroup, Col, Button, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

class ProductEdit extends  React.Component{
    constructor(props){
        super(props);

        this.formSubmit = this.formSubmit.bind(this);

    }
    formSubmit(value){
       alert(JSON.stringify(value));
    }

    render(){
        return(
          <div>
              <PageHeader>Product Edit {this.props.initialValues.product_name}</PageHeader>
              <Form horizontal onSubmit={this.props.handleSubmit(this.formSubmit)}>
                  <Field name="product_name" component={ProductEdit.renderProductName} />
                  <Field name="product_price" component={ProductEdit.renderProductPrice} />
                  <Field name="product_discount" component={ProductEdit.renderProductDiscount} />
                  <FormGroup>
                      <Col smOffset={2} sm={8}>
                        <Button bsStyle="primary" type="submit" disabled={this.props.invalid || this.props.submitting}>Save</Button>
                      </Col>
                  </FormGroup>
              </Form>
          </div>
        );
    }
    static renderProductName(props){
        return(
          <FormGroup validationState={props.meta.touched ? null :
              (props.meta.error ? 'error' : 'success')}>
              <Col sm={2}>Product Name</Col>
              <Col sm={8}>
                <FormControl {...props.input} id="product_name" type="text" placeholder="Product name" />
                <FormControl.Feedback />
                  <HelpBlock>{props.meta.touched &&
                      props.meta.error ? props.meta.error : null}</HelpBlock>
              </Col>
          </FormGroup>
        );
    }

    static renderProductPrice(props){
        return(
            <FormGroup>
                <Col sm={2}>Product Price</Col>
                <Col sm={8}>
                    <InputGroup>
                        <FormControl {...props.input} id="product_price" type="text" placeholder="100$" />
                        <InputGroup.Addon>
                            <Glyphicon glyph="usd" />
                        </InputGroup.Addon>
                    </InputGroup>
                </Col>
            </FormGroup>
        );
    }

    static renderProductDiscount(props){
        return(
            <FormGroup>
                <Col sm={2}>Product Discount</Col>
                <Col sm={8}>
                    <FormControl {...props.input} id="product_discount" type="text" placeholder="0.01" />
                </Col>
            </FormGroup>
        );
    }
}

ProductEdit = reduxForm({
    form: 'product-edit',
    validate: function (value) {
        const errors = {};
        if(!value.product_name){
            errors.product_name = 'Product name is required !';
        }
        return errors;
    }
})(ProductEdit);

//own_props is the props value which we get from url

function mapStateToProps(state, own_props){
    let form_data = {
        product_name: '',
        product_price: 0,
        product_discount: 0
    };
    for (const product of state.products){
        if(product.product_name === own_props.params.name){
            form_data = product;
            break;
        }
    }
    return {
        initialValues: form_data
    };
}

export default connect(mapStateToProps)(ProductEdit);
