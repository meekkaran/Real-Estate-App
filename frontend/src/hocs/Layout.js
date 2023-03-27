import React from 'react';
import Navbar from '../components/Navbar';

const  layout = (props) => {
    return (
    <div>
        <Navbar />
        {props.children}
    </div>
    );  
}

export default layout