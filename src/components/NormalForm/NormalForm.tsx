import React from "react";
import { useForm } from "react-hook-form";
import cn from "../../utils/cn";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const dabble = true;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("border border-red-500  mx-auto p-5", {
        "max-w-5xl": dabble,
        "max-w-md": !dabble,
      })}
    >
      <div
        className={cn(
          "border border-blue-500 grid grid-cols-1 justify-items-center gap-5",
          {
            "md:grid-cols-2": dabble,
          }
        )}
      >
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border-gray-400 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Email
          </label>
          <input
            className="w-full "
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Password
          </label>
          <input
            className="w-full "
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <select>
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
