import React, { useState, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import InputText from "./InputText";
import {ethers} from "ethers";
function Transfer() {
  const [account, setAccount] = useState(null);
  const [tx, setTx] = useState(null); // [tx, setTx
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      address: "0x17752fF2C194085ffbaA59EA128Fd4bdacd91193",
      amount: 0.1,
    },
  });
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
  const onSubmit = async (data) => {
    let ethereum = window.ethereum;
    // Request account access if needed
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const params = 
      {
        from: account,
        to: data.address,
        value: ethers.parseEther(data.amount.toString()),
        gasLimit: 21000,

      }
      console.log(params);
      const transactionHash = await signer.sendTransaction(params);
      const transact = await transactionHash.wait();
      console.log(transact);
      setTx(transact);
      console.log('transactionHash is ' + transact.hash);
  };
  return (
    <div>
      <h1>Transfer</h1>
      <div>
        {account ? <p>Account: {account}</p> : <p>Account: No hay cuenta</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText name="address" register={register} />
          <InputText name="amount" register={register} />
          <button className="btn btn-primary">Enviar</button>
        </form>
        <pre>
          {tx ? (
            <pre>Transaction: {JSON.stringify(tx, null, 4)}</pre>
          ) : (
            <p>Transaction: No hay transacción</p>
          )}
        </pre>
      </div>
    </div>
  );
}

export default Transfer;
