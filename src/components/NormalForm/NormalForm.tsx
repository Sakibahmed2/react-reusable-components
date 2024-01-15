import React from "react";
import { useForm } from "react-hook-form";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-red-500 max-w-5xl mx-auto p-5"
    >
      <div className="border border-blue-500 grid grid-cols-2 gap-5">
        <div className="w-full">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="w-full"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="w-full"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="w-full"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
