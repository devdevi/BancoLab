import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, BootstrapTable, TableHeaderColumn } from 'react-bootstrap';
import { Col} from "react-bootstrap";
import User from './components/User';
import UserList from './components/ProductList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      data:null,
      nombre:null,
    };
    
  }
  _handleResults = (data) => {
    const name = data.data
    const nombre = name.nombre
    console.log(name,nombre)
    this.setState({ data ,
      nombre,
      })
  }

  renderUser(data) {
    console.log(data)
    const name = data.data
    const nombre = name.nombre
   
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    const saldo = getRandomInt(40000,1000000)
    return (
      <Col xs={12} md={3} >
        <h5>Bienvenid@:{nombre}</h5> 
       
      </Col>
      <UserList data={name}/>
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
      <div>
        <User onResults={this._handleResults} />
        { data ?
          this.renderUser(data)
          : this.renderState()}
         
      </div>
    );
  }
}
export default App;
