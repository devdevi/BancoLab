import React, { Component } from 'react';
import Services from './Components/Services';
import Cargando from './Components/Cargando';
import { Thumbnail, Navbar, ProgressBar, Nav, NavItem, NavDropdown, MenuItem, Image, Grid , Col , Row } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid>
      <Services/>
      <Cargando/>
      </Grid>
    );
  }
}

export default App;
