import React, { Component } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import  CuentaOrigen from '../Transferencia/CuentaOrigen'


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const saldoRut = getRandomInt(40000, 1000000)
const saldoCorriente = getRandomInt(40000, 1000000)
const data = [saldoCorriente, saldoRut]
const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

var products = [{
  id: 'CUENTA RUT',
  name: "Disponible",
  price: `$ ${data[0]}`
}, {
  id: 'CUENTA CORRIENTE',
  name: "Disponible",
  price:(`$ ${data[1]}`)

}];
class Cuentas extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  renderState() {
    return (
    <CuentaOrigen/>
    )
  }

render() {
  return (
    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" data={data}>
      <Tab eventKey={1} title="Mis Productos">

        <BootstrapTable data={products}>
          <TableHeaderColumn dataField='id' isKey>Cuentas</TableHeaderColumn>
          <TableHeaderColumn dataField='name' width='150'></TableHeaderColumn>
          <TableHeaderColumn dataField='price' width='90'></TableHeaderColumn>
          <TableHeaderColumn dataField='price' width='90'></TableHeaderColumn>
        </BootstrapTable>
        <div className="well" style={wellStyles}>
          <Button bsStyle="warning" bsSize="large" block type="submit" onClick={this.handleClick}>
            Nueva Transferencia
          </Button>
        </div>
        {this.state.isToggleOn ? 'ON' : this.renderState()}

  </Tab>
      <Tab eventKey={2} title="Comprobantes" disabled>
        Tab 2 content
  </Tab>

    </Tabs>

  )
}
}


export default Cuentas;
