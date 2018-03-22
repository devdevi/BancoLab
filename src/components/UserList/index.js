import React, { Component } from 'react';
import { Col } from "react-bootstrap";
import Cuentas from '../Cuentas';

const UserList = ({data}) => {
  return(
    <Col xs={12} md={12}>
              <h5>Bienvenid@:{data.nombre}</h5>
              <Cuentas/>  
     </Col>
          
  )
}
  export default UserList;