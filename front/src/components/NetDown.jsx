import React from 'react'
import { useParams } from "react-router-dom";
import IsAlive from "./IsAlive";
function NetDown() {
    const params = useParams();

    async function up() {
      let id = params.id;
      let response = await fetch(`http://localhost:3000/down/${id}`);
      let data = await response.json();
      console.log(data);  
    }
    return (
      <div>
        <h4>NetDown</h4>  
        <p>To stop the network press buttom</p>

        <button className="btn btn-primary" onClick={() => up()}>Down</button>
      </div>
    );
  }
  

export default NetDown