import React, { Component } from "react";
import {
  Breadcrumb,
  Grid,
  Row,
  Col,
  Button,
  Modal,
  Table
} from "react-bootstrap";
import './style.css';

class CuentaDestino extends Component {
  constructor(props) {
    super(props);
    this.handleHide = this.handleHide.bind(this);
    this.state = {
      show: false
    };

  }

  handleHide() {
    alert('Transferencia finalizada con exito')
    setTimeout('document.location.reload()', 100);
    this.setState({ show: false });


  }
  render() {
    const objectoRecuperado = localStorage.getItem('clave');
    const saldoCrut = localStorage.getItem('saldoRut');
    const data = ('objectoRecuperado:', JSON.parse(objectoRecuperado));
    return (
      <div>
        <div className="container up">
          <div className="row">
            <h4>Transferencia</h4>
            <div id="division" />
          </div>
        </div>
        <Breadcrumb className="contenedorUL">
          <Breadcrumb.Item className="inactivo2" href="#">
            1
          </Breadcrumb.Item>
          <Breadcrumb.Item className="inactivo2">
            2
          </Breadcrumb.Item>
          <Breadcrumb.Item className="activo2"> Paso 3: Transferencia</Breadcrumb.Item>
        </Breadcrumb>

        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item active">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Transferencia
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade active in"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <Grid className="cuentasFrecuente">
              <Row className="show-grid cuentasOrigen">
              </Row>
              <Row className="show-grid cuentasOrigen">
                <Col xs={12} md={12}>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Desde</th>
                        <th></th>
                        <th>Hacia</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><b>Banco</b></td>
                        <td><small>Banco Estado</small></td>
                        <td><strong>Banco</strong></td>
                        <td><small>{data.banco}</small></td>
                      </tr>
                      <tr>
                        <td><b>Producto:</b></td>
                        <td><small>Cuenta Rut</small></td>
                        <td><b>Producto:</b></td>
                        <td><small>{data.producto}</small></td>
                      </tr>
                      <tr>
                        <td><b>Rut</b></td>
                        <td><small>{localStorage.getItem('rut')}</small></td>
                        <td><b>Rut</b></td>
                        <td><small>{data.rut}</small></td>
                      </tr>
                      <tr>
                        <td><b>Nombre</b></td>
                        <td><small>{localStorage.getItem('nombre')}</small></td>
                        <td><b>Nombre</b></td>
                        <td><small>{data.nombre}</small></td>
                      </tr>
                      <tr>
                        <td><b>Monto</b></td>
                        <td><small>{data.monto}</small></td>
                        <td><b>Monto</b></td>
                        <td><small>{data.monto}</small></td>
                      </tr>
                      <tr>
                        <td><b>Asunto</b></td>
                        <td><small>{data.asunto}</small></td>
                        <td><b>Asunto</b></td>
                        <td><small>{data.asunto}</small></td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Button bsStyle="warning" bsSize="large" block type="submit"
                  onClick={() => this.setState({ show: true })}
                >Transferir
                    </Button>
              </Row>
            </Grid>
          </div>

          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Finalizar Transferencia
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Su saldo es de <b>$ {saldoCrut} </b></p>
              <p>Confirma que desea trasferir<b> ${data.monto}</b></p>
              <p>a  <b>{data.nombre}</b></p>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="warning" bsSize="large" onClick={this.handleHide}>Transferir</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default CuentaDestino;
