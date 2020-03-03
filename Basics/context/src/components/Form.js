import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Form = (props) => {
    const context = useContext(MyContext);
    
    const changeHandler = event => {
        context.setName({
            name: event.target.value
        })
    }

    return (
        <form>
            <label for="name">Your Name:</label>
            <input type="text" name="name" onChange={changeHandler}/>
        </form>
    )
}

export default Form;