import React from "react";

export const Input = ({ label, register, errors, type }) => {
  return (
    <div className="w-full max-w-md">
      <label className="block" htmlFor="name">
        {label}
      </label>
      <input
        className="w-full border-gray-400 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
        type={type}
        {...register}
      />
      {errors.name && (
        <span className="text-xs text-red-500">{errors?.name?.message}</span>
      )}
    </div>
  );
};
