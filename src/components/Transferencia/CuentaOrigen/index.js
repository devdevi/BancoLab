import React, { Component } from "react";
import { Breadcrumb, Grid, Row, Col, Glyphicon } from "react-bootstrap";
import './style.css';
import CuentaDestino from "../CuentaDestino";




class CuentaOrigen extends Component {
  constructor(props ) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    const rut = localStorage.getItem("rut");
console.log(rut )
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  renderState() {
    return (
    <CuentaDestino/>
    )
  }
  render() {
    const  {data} =this.props;
    return <div id="transf-ctaOrigen">
        <div className="container up">
          <div className="row">
            <h4>Transferencia</h4>
            <div id="division" />
          </div>
        </div>
        <Breadcrumb className="contenedorUL">
          <Breadcrumb.Item className="activo" href="#">
            Paso 1: Cuenta de Origen
          </Breadcrumb.Item>
          <Breadcrumb.Item className="inactivo">2</Breadcrumb.Item>
          <Breadcrumb.Item className="inactivo medio">3</Breadcrumb.Item>
        </Breadcrumb>
        <Grid className="cuentasOrigen">
          <Row className="show-grid">
            <Col xs={5} md={5}>
              <p>CUENTA RUT</p>
              <p>({localStorage.getItem("rut")})</p>
            </Col>
            <Col xs={5} md={5}>
              <p>Disponible:</p>
              <p>${data[0]}</p>
            </Col>
            <Col xs={2} md={2}>
              <a href="#" onClick={this.handleClick}>
                <Glyphicon className="chevron" glyph="chevron-right" />
              </a>
            </Col>
          </Row>
        </Grid>
        {this.state.isToggleOn ? "ON" : this.renderState()}
      </div>;
  }
}

export default CuentaOrigen;
