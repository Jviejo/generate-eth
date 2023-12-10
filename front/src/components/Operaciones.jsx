import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Operaciones() {
  return (
    <div>
      <h1>Operaciones</h1>
      <div className="d-flex gap-3">
        <Link to="faucet">faucet</Link>
        <Link to="transfer">transfer</Link>
        <Link to="bloques">bloques</Link>
      </div>
      <h3 className="mt-4">Datos de la red</h3>
      <table className="table">
        <thead>
          <tr>
            
            <th>id</th>
            <th>chain</th>
            <th>subnet</th>
            <th>bootnode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
            <td>net1</td>
            <td>777888</td>
            <td>11</td>
            <td>33</td>
          </tr>
        </tbody>
      </table>
     
      <Outlet />
    </div>
  );
}

export default Operaciones;
