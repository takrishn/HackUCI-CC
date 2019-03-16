import React, { Component } from 'react';
import '../styles/form.css';

class Form extends Component {

    // dynamically count/display characters used in the message textarea onChange
    state = {
        charsUsed: 0 // so that I can access the state to display the chars used
    }
    handleWordCount = event => {
        const charCount = event.target.value.length;
        this.setState({charsUsed: charCount}); // update state so i can display it
    }

    render() {
        return (
            <div>
                <input required className="input" type="text" placeholder="First Name"></input>
                <input required className="input" type="text" placeholder="Last Name"></input>
                <input required className="input" type="email" placeholder="john@example.com"></input>
               
                <textarea required className="input" id="message" 
                    maxlength="500" placeholder="Message"
                    onChange={this.handleWordCount}>
                </textarea>
                <div className="char-counter">{this.state.charsUsed}/500</div>

                <button class="submit-button">Submit</button>
                
            </div> 
        );
    }
}

export default Form;
