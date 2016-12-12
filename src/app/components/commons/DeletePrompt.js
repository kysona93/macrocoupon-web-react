import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class DeletePrompt extends React.Component{
    render(){
        const { show, product, hideDeletePrompt, productDelete } = this.props;
        return(
          <Modal show={show}>
              <Modal.Header>
                  <Modal.Title>
                      Are you sure you want to delete <strong>{product.product_name}</strong>?
                  </Modal.Title>
              </Modal.Header>
              <Modal.Footer>
                  <Button onClick={hideDeletePrompt}>No</Button>
                  <Button bsStyle="primary" onClick={productDelete}>Yes</Button>
              </Modal.Footer>
          </Modal>
        );
    }
}
DeletePrompt.propTypes = {
    show: PropTypes.bool.isRequired,
    product: PropTypes.object.isRequired,
    hideDeletePrompt: PropTypes.func.isRequired,
    productDelete: PropTypes.func.isRequired
}
