import React, { useState, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import InputText from "./InputText";
function Transfer() {
  const [account, setAccount] = useState(null);
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
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Transfer</h1>
      <div>
        {account ? <p>Account: {account}</p> : <p>Account: No hay cuenta</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText label="Address" name="address" register={register} />
          <InputText label="Amount" name="amount" register={register} />
          <button className="btn btn-primary">Solicitar</button>
        </form>
      </div>
    </div>
  );
}

export default Transfer;
