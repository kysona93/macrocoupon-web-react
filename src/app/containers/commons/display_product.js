import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-bootstrap';
import Card from './../../components/commons/card.js';
import { loadProductCards } from './../../actions/products.js';

var $ = require("jquery"); 

class DisplayProduct extends React.Component {
  constructor(props){
    super(props);
    this.state = {  
      limit: 16 
    }

    $(document).scroll(() => {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            //alert("You reached botton");
            this.setState({limit: (this.state.limit+16)})
            this.props.loadProductCards(this.state.limit);
        }
    })
  }

  componentWillMount(){
    this.props.loadProductCards(this.state.limit);
  } 
  // render
  render() {
    return (
      <div className="page-home">
        <Row>
          {this.props.productcards.map((product, index) =>{ 
              return(
                  <Col key={index} xs={12} sm={6} md={3} lg={3}>
                  <Card 
                    name={product.product_name} 
                    location={product.product_state} 
                    discountPrice={product.product_price*product.product_discount} 
                    originalPrice={product.product_price} />
                </Col>) 
            })
          }
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state){
  return ({
    productcards: state.productcards
  })
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({loadProductCards},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayProduct);
