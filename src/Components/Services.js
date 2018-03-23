import React, { Component } from 'react';
import {  Image, Grid , Col , Row } from 'react-bootstrap';
import './Services.css';

class Services extends Component {
  render() {
    return(
      <div className='Services'>
      <Grid>
  <Row>
  <Col md={6} mdOffset={3} >
  <Row>
    <Col className="space" xs={4} md={4} lg={4}>
      <Image src="http://www.bancoestado.cl/imagenes/_campanas/banca-movil/ico1.png" thumbnail/>
      <p>Banca movil</p>
    </Col>
    <Col className="space" xs={4} md={4} lg={4}>
      <Image src="http://www.bancoestado.cl/imagenes/_campanas/banca-movil/ico2.png" thumbnail/>
    </Col>
    <Col className="space" xs={4} md={4} lg={4}>
      <Image src="http://www.bancoestado.cl/imagenes/_campanas/banca-movil/ico3.png" thumbnail />
    </Col>
  </Row>
   <Row>
    <Col className="space" xs={4} md={4} lg={4}>
      <Image src="http://www.bancoestado.cl/imagenes/_campanas/banca-movil/ico4.png" thumbnail />
    </Col>
    <Col className="space"xs={4} md={4} lg={4}>
      <Image src="http://www.bancoestado.cl/imagenes/_campanas/banca-movil/ico5.png" thumbnail/>
    </Col>
    <Col className="space" xs={4} md={4} lg={4}>
      <Image src="http://www.bancoestado.cl/imagenes/_campanas/banca-movil/ico6.png" thumbnail />
    </Col>
  </Row>
  </Col>
  </Row>
   </Grid>
      </div>
        );
  }
}
 export default Services;
