/**
 * Created by CHHAI CHIVON
 */
import React from 'react';
import { form, FormGroup, FormControl,Row, Col ,Grid } from 'react-bootstrap';

class SearchComponent extends React.Component{
    render(){
        return(
         <div>
            <Grid>
                <Row className="Show-grid">
                    <Col xs={6} md={6}>
                        <form>
                            <FormGroup bsSize="large">
                                <FormControl type="text" placeholder="Search..." />
                            </FormGroup>
                        </form>
                    </Col>
                </Row>
            </Grid>
         </div>
        );
    }
}
export default SearchComponent;