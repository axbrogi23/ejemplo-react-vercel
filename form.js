import React from 'react';
import form from 'react-bootstrap/Form';
import button from 'react-bootstrap/Button';
import { ButtonToolbar } from 'react-bootstrap';

function App() {
    return (
        <form>
            <form.Group controlId="formBasicEmail">
                <form.Label>Email address</form.Label>
                <form.Control type="email" placeholder="Enter email" />
            </form.Group>
        

        <form.Group controlId="formBasicPassword">
            <form.Label>Password</form.Label>
            <form.Control type="password" placeholder="Password" />
        </form.Group>
        

        <button variant = "primary" type="submit">
            Submit
        </button>
        </form>
    );
}


export default App;