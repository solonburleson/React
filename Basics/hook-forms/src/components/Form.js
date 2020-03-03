import React, {useState} from 'react';

const Form = props => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmpw: ""
    })

    const changeHandler = event => {
        setFormData({
            ...formData, // ... meaning to keep formData changes
            [event.target.name]: event.target.value 
        });
    }

    return(
        <div>
            <div>
                <form>
                    <div>
                        <label>First Name:</label>
                        <input type="text" name="firstName" onChange={changeHandler} />
                        {formData.firstName !== "" && (formData.firstName.length < 2 && <p class="red">First Name must be greater than 2 characters</p>)}
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" name="lastName" onChange={changeHandler} />
                        {formData.lastName !== "" && (formData.lastName.length < 2 && <p class="red">Last Name must be greater than 2 characters</p>)}

                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" onChange={changeHandler} />
                        {formData.email !== "" && (formData.email.length < 2 && <p class="red">Email must be greater than 2 characters</p>)}
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" onChange={changeHandler} />
                        {formData.password !== "" && (formData.password.length < 8 && <p class="red">Password must be atleast 8 characters long.</p>)}
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input type="password" name="confirmpw" onChange={changeHandler} />
                        {formData.confirmpw !== "" && (formData.password !== formData.confirmpw && <p class="red">Passwords must match</p>)}
                    </div>
                </form>
            </div>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {formData.firstName}</p>
                <p>Last Name: {formData.lastName}</p>
                <p>Email: {formData.email}</p>
                <p>Password: {formData.password}</p>
                <p>Confirm Password: {formData.confirmpw}</p>
            </div>
        </div>
    )
}

export default Form;