import React, { Component } from 'react';
import { ProgressBar, Grid, Col, Row, ResponsiveEmbed } from 'react-bootstrap';
import User from './components/User';
import UserList from './components/UserList';
import Services from './components/Services';
import Cargando from './components/Cargando';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      data: null,
      nombre: null,
    };

  }
  handleResults = (data) => {
    const name = data.data
    const nombre = name.nombre
    console.log(name, nombre)
    this.setState({
      data,
      nombre,
    })
  }
  renderUser(data) {
    console.log(data)
    const name = data.data
    localStorage.setItem("nombre", name.nombre, );
    localStorage.setItem("rut", name.rut);
    return (
      <UserList data={name} />
    )
  }
  renderState() {
    return (
      <h3>Bienvenid@ </h3>

    )
  }
  render() {
    const { data } = this.state
    return (
      <Grid>
        <Row className="show-grid">
          <User onResults={this.handleResults} />
          {data ?
            this.renderUser(data)
            : this.renderState()}

          <div >
            <ResponsiveEmbed a16by9>
              <Services />
            </ResponsiveEmbed>
          </div>
        </Row>
        {/*
      <Cargando/>*/}
      </Grid>

    );
  }
}
export default App;
