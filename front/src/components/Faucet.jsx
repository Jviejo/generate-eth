
import React, { useState, useEffect } from "react";


function Faucet() {
  const [account, setAccount] = useState(null);
  useEffect(() => {
    const ethereum = window.ethereum;

    if (ethereum) {
      ethereum.on("accountsChanged", (accounts) => {
        console.log(accounts);
        setAccount(accounts[0]);
      });
      ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts) => {
          console.log(accounts);
          setAccount(accounts[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  async function send(amount) {
    fetch(`http://localhost:3000/faucetaccount=${account}&amount=${amount}`)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <h1>Faucet</h1>
      <div>
        {account ? <p>Account: {account}</p> : <p>Account: No hay cuenta</p>}
        <p>Cantidad solicitada 0.1</p>
        <button className="btn btn-primary" onClick={() => {send(0.1)}}>
          Solicitar
        </button>
      </div>
    </div>
  );
}

export default Faucet;
