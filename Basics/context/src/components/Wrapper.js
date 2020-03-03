import React, {useContext} from 'react';
import Navbar from './Navbar';
import FormWrapper from './FormWrapper';

const Wrapper = (props) => {
    return (
        <div>
            <Navbar />
            <FormWrapper />
        </div>
    )
}

export default Wrapper;