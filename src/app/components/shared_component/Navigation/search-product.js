/**
 * Created by Naseat on 12/6/2016.
 */

import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FormControl,button} from 'react-bootstrap';
const product = [
  'Apple',
  'Orange',
  'Iphone',
  'Cocacola',
  'Pepsi',
  'Spa',
  'Test',
  'Car',
];
export default class SearchProduct extends React.Component{
  constructor(props) {
    super(props);
  };
  render(){
    return(
      <MuiThemeProvider>
              <AutoComplete className="autocomplete"
                filter={AutoComplete.caseInsensitiveFilter}
                dataSource={product}
                hintText="search products and services"
                style={{color:'white',background:'white',height:'40px'}}
              />
        </MuiThemeProvider>
        );
    }

}
