import React from "react";
import { Link } from "react-router-dom";

function ListNetworks() {
  let networks = [
    {
      id: "net1",
      chain: 777888,
      subnet: "192.168.1.0/24",
      bootnode: "192.168.1.1",
    },
    {
      id: "net2",
      chain: 777889,
      subnet: "192.168.2.0/24",
      bootnode: "192.168.2.1",
    },
    {
      id: "net3",
      chain: 777890,
      subnet: "192.168.3.0/24",
      bootnode: "192.168.3.0",
    },
  ];
  return (
    <div>
      <h1>List Networks</h1>
      <Link to="/net/add">Add Network</Link>
      <table className="table">
        <thead>
          <tr>
            <th></th>
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
                <Link  to={`/net/${net.id}/edit`}>Edit </Link>
                <span className="mr-3">|</span>
                <Link to={`/net/${net.id}/display`}>View</Link>
                <span className="mr-3">|</span>
                <Link to={`/net/${net.id}/operaciones`}>Operaciones</Link>
              </td>
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
