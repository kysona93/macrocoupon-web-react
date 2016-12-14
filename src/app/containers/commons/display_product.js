import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Row, Col, Button, Glyphicon } from 'react-bootstrap';
import Card from './../../components/commons/card.js';
import { loadProductCards } from './../../actions/products.js';
var Scroll  = require('react-scroll');
var $ = require("jquery"); 
var scroll     = Scroll.animateScroll;

class DisplayProduct extends React.Component {
  constructor(props){
    super(props);
    this.state = {  
      limit: 16,
      scrollTop: false
    }
    //this.scrollDownMore = this.scrollDownMore.bind(this);
    $(document).scroll(() => {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            //alert("You reached botton");
            this.setState({limit: (this.state.limit+16)})
            this.props.loadProductCards(this.state.limit);
        }
        // if($(window).scrollTop()> 2048){

        // }
    })
  }

  componentWillMount(){
    this.props.loadProductCards(this.state.limit);
  } 
  // scrollDownMore(){
  //       scroll.scrollToTop();
  // }
  // render
  render() {
    return (
      <div className="container">
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
        <center><i className="fa fa-spinner fa-spin fa-5x" style={{"color":"#2196F3"}}></i></center>

        { /*<div onClick={this.scrollDownMore} style={{"float":"right","backgroundColor":"black","width":"40px","height":"40px"}}>
            <center><Glyphicon glyph="glyphicon glyphicon-chevron-up" style={{"color":"white"}}/></center>
        </div> */ }
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
