import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { SignUpSchema, TNormalForm } from "./validation";

const NormalForm = () => {
  const methods = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const dabble = true;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("border border-gray-300 rounded-lg shadow-md mx-auto p-5", {
        "max-w-5xl": dabble,
        "max-w-md": !dabble,
      })}
    >
      <div
        className={cn("grid grid-cols-1 justify-items-center gap-5", {
          "md:grid-cols-2": dabble,
        })}
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
          {errors.name && (
            <span className="text-xs text-red-500">
              {errors?.name?.message}
            </span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="w-full "
            type="text"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xs text-red-500">
              {errors?.email?.message}
            </span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="w-full "
            type="text"
            id="password"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-xs text-red-500">
              {errors?.password?.message}
            </span>
          )}
        </div>
        {/* <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
          Name
          </label>
          <select>
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
          </select>
        </div> */}
      </div>
      <div
        className={cn("grid grid-cols-1 justify-items-center gap-5", {
          "md:grid-cols-2": dabble,
        })}
      >
        <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
          <Button className="w-full md:w-fit my-8" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
