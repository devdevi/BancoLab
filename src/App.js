import React, { Component } from 'react';
import { Thumbnail, Navbar, ProgressBar, Nav, NavItem, NavDropdown, MenuItem, Image, Grid, Col, Row } from 'react-bootstrap';
import { Form, FormGroup, ControlLabel, FormControl, Button, BootstrapTable, TableHeaderColumn } from 'react-bootstrap';
import User from './Components/User';
import UserList from './Components/UserList';
import Services from './Components/Services';
import Cargando from "./Components/Cargando";

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      data: null,
      nombre: null,
    };

  }
handleResults = (data) => {
    const name = data.data
    const nombre = name.nombre
    console.log(name, nombre)
    this.setState({
      data,
      nombre,
    })
  }
  renderUser(data) {
    console.log(data)
    const name = data.data
    localStorage.setItem("nombre",name.nombre,);
    localStorage.setItem( "rut",name.rut);
    return (
      <UserList data={name} />
    )
  }
  renderState() {
    return (<h3> Inicia Sesion</h3>
    )
  }
  render() {
    const { data } = this.state
    return (
      <Grid>
        <div>
          <User onResults={this.handleResults} />
          {data ?
            this.renderUser(data)
            : this.renderState()}
        </div>
        {/* <Services/>
      <Cargando/>*/}
      </Grid>

    );
  }
}
export default App;
