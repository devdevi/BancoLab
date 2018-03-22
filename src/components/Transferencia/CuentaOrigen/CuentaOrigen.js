import React, { Component } from "react";
import { Breadcrumb, Grid, Row, Col, Glyphicon } from "react-bootstrap";
import './style.css';

class CuentaOrigen extends Component {
  render() {
    return <div>
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
              <p>XXXX-1171</p>
            </Col>
            <Col xs={5} md={5}>
              <p>Disponible:</p>
              <p>$750.000</p>
            </Col>
            <Col xs={2} md={2}>
              <a href="#">
                <Glyphicon className="chevron" glyph="chevron-right" />
              </a>
            </Col>
          </Row>
        </Grid>
      </div>;
  }
}

export default CuentaOrigen;
