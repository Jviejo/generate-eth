
import React, { useState, useEffect } from "react";
import { set } from "react-hook-form";
import { useParams } from "react-router-dom";

function Faucet() {
  const [account, setAccount] = useState(null);
  const [tx, setTx] = useState(null); // [tx, setTx
  const params = useParams();
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
    fetch(`http://localhost:3000/faucet/${params.id}/${account}/${amount}`)
      .then((response) => {
        response.json().then((data) => {
          setTx(data);
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
        <p>{tx ? <pre>Transaction: {JSON.stringify(tx,null, 4)}</pre> : <p>Transaction: No hay transacción</p>}</p>
      </div>
    </div>
  );
}

export default Faucet;
