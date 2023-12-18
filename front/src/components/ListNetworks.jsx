import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IsAlive from "./IsAlive";

function ListNetworks() {
  
  const [networks, setNetworks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000").then((response) => {
      response.json().then((data) => {
        setNetworks(data);
      });
    });
  }, []);
  return (
    <div>
      <h1>List Networks</h1>
      <Link to="/net/add">Add Network</Link>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>status</th>
            <th>id</th>
            <th>chain</th>
            <th>subnet</th>
            <th>bootnode</th>
          </tr>
        </thead>
        <tbody>
          {networks.map((net, index) => (
            <tr key={index}>
              <td>
                <Link to={`/net/${net.id}/edit`}>Edit </Link>
                <span className="mr-3">|</span>
                <Link to={`/net/${net.id}/operaciones`}>Operaciones</Link>
              </td>
              <td><IsAlive id={net.id}></IsAlive></td>
              <td>{net.id}</td>
              <td>{net.chain}</td>
              <td>{net.subnet}</td>
              <td>{net.bootnode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListNetworks;
