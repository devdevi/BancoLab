// Navbar con input para buscar y el logo y el icono del carro de compras
import React, { Component } from 'react';
import { Navbar, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import $ from 'jquery';
import logo from './../../img/banco estado.png';
// import './style.css';

// Inicio el componente de clase
class User extends Component {
    constructor() {
        super();
        // Declaro un estado vacio inicial en el formControl
        this.state = {
            value: '',
            val: '',
            user: null,
        }
        // Llamo a mis funciones declaradas más abajo .bind les pide que estas funciones

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeP = this.handleChangeP.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Funcion que detecta el cambio de estado en el formControl
    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    // Funcion que toma el valor y poder usarlo
    handleSubmit(event) {
        event.preventDefault();
        const { value } = this.state
        const{val}= this.state
        fetch(`https://api.rutify.cl/rut/${value}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const results = { data };
                console.log({ results })
                this.props.onResults(results)
                this.setState({
                    value: '',
                    user: { data }
                })
                console.log('pinta')
            })
    }



    // Aquí se renderiza el navbar
    render() {
        return (
            <Navbar className='nav-bar' >
                <Navbar.Header>
                    <Navbar.Brand className='logo'>
                        <a href="index.html"><img height={50} src={logo} alt={''} /></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse className='container-form'>
                    <Navbar.Form className='form-search'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup controlId="formInlineName">
                                <ControlLabel>Rut usuario</ControlLabel>{' '}
                                <FormControl type="text" value={this.state.value} onChange={this.handleChange} placeholder="12-345678-9" />
                                <ControlLabel>Clave</ControlLabel>{' '}
                                <FormControl type="password" placeholder=" " onChange={this.handleChangeP} value={this.state.val}/>
                                <Button type="submit" bsStyle='success' id="signIn"  >Ingresar</Button>
                            </FormGroup>{' '}
                            <FormGroup controlId="formInlineEmail">
                            </FormGroup>{' '}
                        </Form>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

User.propTypes = {
    value: PropTypes.string,
}

export default User;
