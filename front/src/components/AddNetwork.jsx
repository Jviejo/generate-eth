import { useFieldArray, useForm } from "react-hook-form";
function InputText({ name, label, help, register }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type="text"
        className="form-control"
        aria-describedby="emailHelp"
        {...register(name, { required: true })}
      />
    </div>
  );
}

function AddNetwork() {
  let registro = {
    id: "net1",
    chainId: 777888,
    subnet: "11",
    ipBootnode: "33",
    alloc: [
      "C077193960479a5e769f27B1ce41469C89Bec299",
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
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: registro,
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
