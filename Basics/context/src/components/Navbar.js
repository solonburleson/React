import React, {useContext} from 'react';
import MyContext from '../context/MyContext';

const Navbar = (props) => {
    const context = useContext(MyContext);

    return (
        <div>
            <h1>Hello, {context.name.name}</h1>
        </div>
    )
}

export default Navbar;