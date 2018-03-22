import React, { Component } from 'react';
import { Thumbnail, Navbar, ProgressBar, Nav, NavItem, NavDropdown, MenuItem, Image, Grid , Col , Row } from 'react-bootstrap';
import './Cargando.css';


class Cargando extends Component {
  render() {
    return(
      <div className='Cargando'>
  <Row>
  <Col>
    <ProgressBar active now={70} label={`${60}%`} />
  </Col>
  </Row>
  </div>
  );
  }
}


export default Cargando;