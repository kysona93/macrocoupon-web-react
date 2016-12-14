import React from 'react';
import { render } from 'react-dom';

export default class Footer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){

        return(
                    <div>

                        <footer>
                           <p>© 2016 Macrocoupon, Inc. All Rights Reserved.</p>
                       </footer>
                    </div>
        );
    }
}
