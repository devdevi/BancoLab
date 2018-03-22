import React, { Component } from 'react';
import { Col, Button } from "react-bootstrap";
import User from '../User'

const UserList = ({data}) => (

    <Col xs={12} md={3}>
              <h5>Bienvenida : Caro Saveedra{data.nombre}</h5>  
          </Col>
)
  export default UserList;