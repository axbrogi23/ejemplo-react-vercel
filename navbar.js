import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Mi Aplicación</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#features">Características</Nav.Link>
                <Nav.Link href="#pricing">Precios</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default App;