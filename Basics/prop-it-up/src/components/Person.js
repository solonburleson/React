import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            age: props.age,
            hairColor: props.hairColor
        }
    }

    happyBirthday = () => {
        this.setState({
            age: this.state.age + 1
        })
    }

    render() {
        
        return (
            <div>
                <h1>{this.state.lastName}, {this.state.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.state.hairColor}</p>
                <button onClick={this.happyBirthday}>Birthday Button for {this.state.firstName} {this.state.lastName}</button>
            </div>
        )
    }
}

export default Person;