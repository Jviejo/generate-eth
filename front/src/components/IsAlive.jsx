import React from "react";
import {useState, useEffect} from "react";
function IsAlive({ id }) {
  const [live, setLive] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/isAlive/${id}`).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setLive(data.alive);
      });
    });
  }, []);
  return (
    <>
      {live ? (
        <span className="text-success">Network is up</span>
      ) : (
        <span className="text-danger">Network is down</span>
      )}
    </>
  );
}

export default IsAlive;
