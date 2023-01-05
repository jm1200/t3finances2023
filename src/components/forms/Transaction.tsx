import { useForm } from "react-hook-form";

type FormData = {
  name: string;
};

export const TransactionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input {...register("name", { required: "This is  required Field" })} />
      {errors.name?.message && <p>{errors.name.message}</p>}

      <input type="submit" />
    </form>
  );
};
