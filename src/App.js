import React, { Component } from 'react';
import { Thumbnail, Navbar, ProgressBar, Nav, NavItem, NavDropdown, MenuItem, Image, Grid, Col, Row } from 'react-bootstrap';
import { Form, FormGroup, ControlLabel, FormControl, Button, BootstrapTable, TableHeaderColumn } from 'react-bootstrap';
import User from './components/User';
import UserList from './components/UserList';
import Services from './components/Services';
import Cargando from './components/Cargando';

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
  handleTransfer = (event) => {
    event.preventDefault();
    return (
      alert('hello baby')
    )

  }

  _handleResults = (data) => {
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
    const nombre = name.nombre
    return (
      <UserList data={name} />
    )
  }
  // return days.map(day =>(
  // 		 	<ForecastItem weekDay = {day}  key={day}  hour = {10} data = {data}></ForecastItem>
  // 		 	))

  // 
  renderState() {
    return (<h3> Inicia Sesion</h3>
    )
  }


  render() {
    const { data } = this.state
    return (
      <Grid>
        <div>
          <User onResults={this._handleResults} />
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
