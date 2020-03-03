import React, {useState} from 'react';
import Box from './Box';

const Colors = props => {
    const [colors, setColors] = useState({
        colours: []
    });

    const addColor = event => {
        event.preventDefault();
        console.log(event.target.color.value)
        setColors({
            ...colors,
            colors: colors['colours'].push(event.target.color.value)
        })
        console.log(colors.myColors)
        event.target.color.value = ''
    }

    return (
        <div>
            <form onSubmit={addColor}>
                <label>Color:</label>
                <input type="text" name="color" />
                <input type="submit" value="Submit" />
            </form>
            <div>
                {colors['colours'].map(c => 
                    <Box color={c} />
                )}
            </div>
        </div>
    )
}

export default Colors;