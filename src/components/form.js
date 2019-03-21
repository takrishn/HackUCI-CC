import React, { Component } from 'react';
import '../styles/form.css';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            charsUsed: 0, // dynamically count/display characters used in the message textarea onChange
            fields: {first: '', last: '', email: '', message: ''}, // input values
            errors: {} // error messages

        };
    }
    
    // form validation
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // first name
        if(!fields['first']) {
            formIsValid = false;
            errors['first'] = 'Cannot be empty';
            document.getElementById('first').style.borderColor = 'red';
        }

        // last name
        if(!fields['last']) {
            formIsValid = false;
            errors['last'] = 'Cannot be empty';
            document.getElementById('last').style.borderColor = 'red';
        }

        // message
        if(!fields['message']) {
            formIsValid = false;
            errors['message'] = 'Cannot be empty';
            document.getElementById('message').style.borderColor = 'red';
        }

        // email
        if(!fields['email']) {
            formIsValid = false;
            errors['email'] = 'Cannot be empty';
            document.getElementById('email').style.borderColor = 'red';
        }
        if (typeof fields['email'] !== 'undefined') {
            if (!fields['email'].match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ig)) {
                formIsValid = false;
                errors['email'] = 'Invalid Email';
                document.getElementById('email').style.borderColor = 'red';
            }
        }

        // set the state to changes made
        this.setState({errors: errors});
        return formIsValid;
    }

    handleSubmit = event => {
        if (this.handleValidation()) {
            console.log('Form submitted');
        } else {
            console.log('invalid');
        }
    };

    // update the state based on user input
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields: fields});
        document.getElementById(field).style.borderColor = 'lightgrey';
    }
        
    // this is for the message field. I need to count word count and handleChange.
    handleWordCount(field, e) {
        const charCount = e.target.value.length;
        this.setState({charsUsed: charCount}); // update state so i can display it
        this.handleChange(field, e);
    };

    render() {
        return (
            <div>
                <input className="input" id="first" type="text" placeholder="First Name"
                    onChange={this.handleChange.bind(this, "first")} value={this.state.fields["first"]}></input>
                <input className="input" id="last" type="text" placeholder="Last Name"
                    onChange={this.handleChange.bind(this, "last")} value={this.state.fields["last"]}></input>
                <input className="input" id="email" type="email" placeholder="john@example.com"
                    onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}></input>
               
                <textarea className="input" id="message" 
                    maxLength="500" placeholder="Message"
                    onChange={this.handleWordCount.bind(this, "message")} value={this.state.fields["message"]}>
                </textarea>
                <div className="char-counter">{this.state.charsUsed}/500</div>

                <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
            </div> 
        );
    }
}

export default Form;
