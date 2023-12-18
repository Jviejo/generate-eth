import React from "react";
import { useParams } from "react-router-dom";
import IsAlive from "./IsAlive";
function NetUp() {
  const params = useParams();

  async function up() {
    let id = params.id;
    let response = await fetch(`http://localhost:3000/up/${id}`);
    let data = await response.json();
    console.log(data);
  }

  

  return (
    <div>
      <h4>NetUp</h4>
      <p>To start the network press buttom</p>
    
      <button className="btn btn-primary" onClick={() => up()}>
        Up
      </button>
    </div>
  );
}

export default NetUp;
