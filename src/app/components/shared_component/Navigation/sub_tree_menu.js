/**
 * Created by Acer on 12/6/2016.
 */

import React from'react';
import { connect } from "react-redux";
import Drawer from 'material-ui/Drawer';
import {Navbar} from'react-bootstrap';
import { Accordion,Panel,Row,Col,Grid,Nav,NavItem,NavDropdown,FormGroup,FormControl,Button,ControlLabel,Badge} from 'react-bootstrap';

class SubTreeMenu extends React.Component{
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
              <Panel header=">&nbsp;Services" eventKey="2"  >
                {this.props.services.map((ser,index)=>{
                    return(
                      <Accordion key={index}>
                        <Panel header={ser.ServiceName} eventKey="2">
                        </Panel>
                      </Accordion>
                    );
                })}
              </Panel>
            </Accordion>
        </div>
    );
  }
}
function mapStateToProps(state){
  return{
    services: state.services
  }
}
function mapDispatchToProps(dispatch){
  return ({
    list:()=>dispatch({
      type:'SERVICE_CATEGORY_LIST'
    })
  });
}
export default connect(mapStateToProps,mapDispatchToProps)(SubTreeMenu);
