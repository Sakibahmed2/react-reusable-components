import React from "react";

const CheckBox = ({ label, register, errors }) => {
  return (
    <div className="w-full flex ">
      <div className="max-w-md flex flex-row-reverse items-center justify-start gap-1">
        <label className="block" htmlFor="name">
          {label}
        </label>
        <input
          className=" border-gray-400 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          type="checkbox"
          {...register}
        />
        {errors.name && (
          <span className="text-xs text-red-500">{errors?.name?.message}</span>
        )}
      </div>
    </div>
  );
};

export default CheckBox;
