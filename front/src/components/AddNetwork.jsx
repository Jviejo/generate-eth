import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import InputText from "./InputText";

function AddNetwork() {
  const params = useParams();
  const [network, setNetwork] = useState(null);
  let id = params.id;
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/${id}`).then((response) => {
        response.json().then((data) => {
          console.log(data);
          setNetwork(data);
        });
      }); 
    } else {
      setNetwork({
        id: "",
        chainId: 0,
        subnet: "",
        ipBootnode: "",
        alloc: [
          "C077193960479a5e769f27B1ce41469C89Bec299",
        ],
        nodos: [
          {
            type: "",
            name: "",
            ip: "",
            port: 0,
          },
        ],
      })
    }
  }, [id]);
  

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: network,
  });

  const {
    fields: allocFields,
    append: allocAppend,
    remove: allocRemove,
  } = useFieldArray({
    control,
    name: "alloc",
  });

  const {
    fields: nodosFields,
    append: nodosAppend,
    remove: nodosRemove,
  } = useFieldArray({
    control,
    name: "nodos",
  });

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
      });
    });

  };

  return (
    <div className="container">
      <h1>Add Network</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          name="id"
          label="Network ID"
          help="Network ID"
          register={register}
        />
        <InputText
          name="chainId"
          label="Chain ID"
          help="Chain ID"
          register={register}
        />
        <InputText
          name="subnet"
          label="Subnet"
          help="Subnet"
          register={register}
        />
        <InputText
          name="ipBootnode"
          label="IP Bootnode"
          help="IP Bootnode"
          register={register}
        />
        <h3>Alloc</h3>
        <input
          className="btn btn-primary"
          type="button"
          onClick={() => allocAppend("")}
          value="Add"
        />
        <div>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Cuenta</th>
              </tr>
            </thead>
            <tbody>
              {allocFields.map((field, index) => (
                <tr key={field.id}>
                  <td>
                    <input
                      type="button"
                      onClick={() => allocRemove(index)}
                      value="X"
                    />
                  </td>
                  <td>
                    <input {...register(`alloc.${index}`)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Nodos</h3>
        <input
          className="btn btn-primary"
          type="button"
          onClick={() => nodosAppend("")}
          value="Add"
        />
        <div>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Type</th>
                <th>Name</th>
                <th>IP</th>
                <th>Port</th>
              </tr>
            </thead>
            <tbody>
              {nodosFields.map((field, index) => (
                <tr key={field.id}>
                  <td>
                    <input
                      type="button"
                      onClick={() => nodosRemove(index)}
                      value="X"
                    />
                  </td>
                  <td>
                    <input {...register(`nodos.${index}.type`)} />
                  </td>
                  <td>
                    <input {...register(`nodos.${index}.name`)} />
                  </td>
                  <td>
                    <input {...register(`nodos.${index}.ip`)} />
                  </td>
                  <td>
                    <input {...register(`nodos.${index}.port`)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
}

export default AddNetwork;
