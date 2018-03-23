import React, { Component } from "react";
import {
  Breadcrumb,
  Grid,
  Row,
  Col,
  Glyphicon,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Modal,
  Table
} from "react-bootstrap";
import CuentaTrasferencia from '../CuentaTransferencia';
import $ from 'jquery'
import './style.css';

class CuentaDestino extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banco: '',
      producto: '',
      cuenta: '',
      rut: '',
      nombre: '',
      mail: '',
      asunto: '',
      monto: '',
      data: null,
      isToggleOn: true
    };

  }
  submit(e) {
    e.preventDefault();
    const testObjecto = this.state;
    localStorage.setItem('clave', JSON.stringify(testObjecto));
    const  objectoRecuperado = localStorage.getItem('clave');
    console.log('objectoRecuperado: ', JSON.parse(objectoRecuperado));
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  renderState() {
    $('#thirdSection').hide()
    return (
      <CuentaTrasferencia />
    )
  }

  render() {
    const data = JSON.stringify(this.state);
    return (
      <div>
        <div id="thirdSection">
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
            <Breadcrumb.Item className="activo2">
              Paso 2: Cuenta de Destino
          </Breadcrumb.Item>
            <Breadcrumb.Item className="inactivo medio">3</Breadcrumb.Item>
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
                Cuenta Frecuente
            </a>
            </li>
            <li className="nav-item tab">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Cuenta Nueva
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
                  <Col xs={10} md={10} className="izquierda">
                    <p>Roberto Pérez</p>
                    <p>CUENTA RUT (000000000011111111)</p>
                    <p>BANCO DEL ESTADO DE CHILE</p>
                  </Col>
                  <Col xs={2} md={2}>
                    <a href="#" onClick={() => this.setState({ show: true })}>
                      <Glyphicon className="chevron" glyph="chevron-right" />
                    </a>
                  </Col>
                </Row>
                <Row className="show-grid cuentasOrigen">
                  <Col xs={10} md={10} className="izquierda">
                    <p>Roberto Pérez</p>
                    <p>CUENTA RUT (000000000011111111)</p>
                    <p>BANCO DEL ESTADO DE CHILE</p>
                  </Col>
                  <Col xs={2} md={2}>
                    <a href="#" onClick={this.handleClick}>
                      <Glyphicon className="chevron" glyph="chevron-right" />
                    </a>
                  </Col>
                </Row>
                <Row className="show-grid cuentasOrigen">
                  <Col xs={10} md={10} className="izquierda">
                    <p>Roberto Pérez</p>
                    <p>CUENTA RUT (000000000011111111)</p>
                    <p>BANCO DEL ESTADO DE CHILE</p>
                  </Col>
                  <Col xs={2} md={2}>
                    <a href="#" onClick={() => this.setState({ show: true })}>
                      <Glyphicon className="chevron" glyph="chevron-right" />
                    </a>
                  </Col>
                </Row>
                <Row className="show-grid cuentasOrigen">
                  <Col xs={10} md={10} className="izquierda">
                    <p>Roberto Pérez</p>
                    <p>CUENTA RUT (000000000011111111)</p>
                    <p>BANCO DEL ESTADO DE CHILE</p>
                  </Col>
                  <Col xs={2} md={2}>
                    <a href="#" onClick={this.handleClick}>
                      <Glyphicon className="chevron" glyph="chevron-right" />
                    </a>
                  </Col>
                </Row>
              </Grid>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <Grid className="cuentasNueva">
                <Row className="show-grid cuentasOrigen">
                  <Col xs={12} md={12} className="izquierda">
                    <Form inline>
                      <FormGroup className="izquierda">
                        <ControlLabel>Banco</ControlLabel>
                        <FormControl
                          id="banco"
                          componentClass="select"
                          placeholder="select"
                          value={this.state.banco}
                          onChange={this.getBanco.bind(this)}
                        >
                          <option value="sele">
                            Seleccione Banco de Destino
                        </option>
                          <option value="Banco de Chile">Banco de Chile</option>
                          <option value="Bancoestado">Bancoestado</option>
                          <option value="BCI">BCI</option>
                          <option value="Itaú">Itaú</option>
                        </FormControl>
                      </FormGroup>
                      <FormGroup className="izquierda">
                        <ControlLabel>Producto</ControlLabel>
                        <FormControl
                          id="producto"
                          componentClass="select"
                          placeholder="select"
                          value={this.state.producto}
                          onChange={this.getProd.bind(this)}
                        >
                          <option value="sele">Seleccione Tipo de Cuenta</option>
                          <option value="Cuenta Corriente">
                            Cuenta Corriente
                        </option>
                          <option value="Chequera Electrónica">
                            Chequera Electrónica
                        </option>
                          <option value="Cuenta Rut">Cuenta Rut</option>
                          <option value="Cuenta de Ahorro">
                            Cuenta de Ahorro
                        </option>
                          <option value="Cuenta de Gastos">
                            Cuenta de Gastos
                        </option>
                        </FormControl>
                      </FormGroup>
                      <FormGroup className="izquierda">
                        <ControlLabel>N° de Cuenta</ControlLabel>
                        <FormControl
                          id="cuenta"
                          type="number"
                          placeholder="Ingresa cuenta"
                          value={this.state.cuenta}
                          onChange={this.getCuenta.bind(this)}
                        />
                      </FormGroup>
                      <FormGroup className="izquierda">
                        <ControlLabel>Rut</ControlLabel>
                        <FormControl
                          id="rut"
                          type="number"
                          placeholder="111111111"
                          value={this.state.rut}
                          onChange={this.getRut.bind(this)}
                        />
                      </FormGroup>
                      <FormGroup className="izquierda">
                        <ControlLabel>Nombre</ControlLabel>
                        <FormControl
                          id="nombre"
                          type="text"
                          placeholder="Ingrese Nombre"
                          value={this.state.nombre}
                          onChange={this.getNombre.bind(this)}
                        />
                      </FormGroup>
                      <FormGroup className="izquierda">
                        <ControlLabel>Monto</ControlLabel>
                        <FormControl
                          id="monto"
                          type="text"
                          placeholder="$000"
                          value={this.state.monto}
                          onChange={this.getMail.bind(this)}
                        />
                      </FormGroup>
                      <FormGroup className="izquierda">
                        <ControlLabel>Asunto</ControlLabel>
                        <FormControl
                          id="asunto"
                          type="text"
                          placeholder="Dinero para pan"
                          value={this.state.asunto}
                          onChange={this.getAsunto.bind(this)}
                        />
                      </FormGroup>
                      <Button bsStyle="warning" bsSize="large" block type="submit" onClick={this.submit.bind(this)}
                      >Transferir
                    </Button>
                      <div className="modal-container">
                      </div>
                    </Form>
                  </Col>
                </Row>
              </Grid>
            </div>
          </div>
        </div>
        {this.state.isToggleOn ? '' : this.renderState()}
      </div>
    );
  }

  getBanco(event) {
    this.setState({
      banco: event.target.value
    });
  }

  getProd(event) {
    this.setState({
      producto: event.target.value
    });
  }

  getCuenta(event) {
    this.setState({
      cuenta: event.target.value
    });
  }

  getRut(event) {
    this.setState({
      rut: event.target.value
    });
  }

  getNombre(event) {
    this.setState({
      nombre: event.target.value
    });
  }

  getMail(event) {
    this.setState({
      monto: event.target.value
    });
  }

  getAsunto(event) {
    this.setState({
      asunto: event.target.value
    });
  }
}

export default CuentaDestino;
