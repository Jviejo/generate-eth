

export default function InputText({ name, label, help, register }) {
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