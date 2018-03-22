import React, { Component } from 'react';
import Services from './Components/Services';
import { Thumbnail, Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Grid , Col , Row } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid>
      <Services/>
      </Grid>
    );
  }
}

export default App;
