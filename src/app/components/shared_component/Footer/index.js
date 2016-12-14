import React from 'react';
import Footer from './Footer.jsx';
import Company from './Company.jsx';
export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Company/>
                <Footer/>
            </div>
        );

    }
}
