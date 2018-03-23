import React, { Component } from 'react';
import { Col } from "react-bootstrap";
import Cuentas from '../Cuentas';

const UserList = ({data}) => {
  return <Col xs={12} md={12}>
      <h3>Bienvenid@:{data.nombre}</h3>
      <div className="cuentasBox">
        <Cuentas />
      </div>
    </Col>;
}
  export default UserList;
