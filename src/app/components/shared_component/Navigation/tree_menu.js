/**
 * Created by Acer on 12/6/2016.
 */

import React from'react';
import { connect } from "react-redux";
import Drawer from 'material-ui/Drawer';
import {Navbar} from'react-bootstrap';
import SubTreeMenu from './sub_tree_menu';
import { Accordion,Panel,Row,Col,Grid,Nav,NavItem,NavDropdown,FormGroup,FormControl,Button,ControlLabel,Badge} from 'react-bootstrap';

class TreeMenu extends React.Component{
constructor(props){
  super(props);

}
  componentWillMount() {
    this.props.list();
  }
  render(){
    return(
        <div>
            <Accordion>
              <Panel header=">&nbsp;Product" eventKey="1"  >
                {this.props.productCategory.map((pro,index)=>{
                    return(
                      <Accordion key={index}>
                        <Panel header={pro.product} eventKey="1">
                        </Panel>
                      </Accordion>
                    );
                })}
              </Panel>

            </Accordion>

            <SubTreeMenu/>

        </div>
    );
  }
}
function mapStateToProps(state){
  return{
    productCategory: state.productCategory
  }
}
function mapDispatchToProps(dispatch){
  return ({
    list:()=>dispatch({
      type:'PRODUCT_CATEGORY_LIST'
    })
  });

}

export default connect(mapStateToProps,mapDispatchToProps)(TreeMenu);
