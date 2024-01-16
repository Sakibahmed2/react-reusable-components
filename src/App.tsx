import React from "react";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/ReuseableForm";
import Container from "./components/ui/Container";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import CheckBox from "./components/ReuseableForm/CheckBox";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const SignUpSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email().min(1, { message: "Email is required" }),
    password: z.string().min(8, "To short"),
  });

  type TFormValidation = z.infer<typeof SignUpSchema>;

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container>
      <Form
        double={true}
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
      >
        <FormSection>
          <Input
            label="Name"
            errors={errors}
            register={register("name")}
            type="text"
          />
          <Input
            label="Email"
            errors={errors}
            register={register("email")}
            type="email"
          />
          <Input
            label="Password"
            errors={errors}
            register={register("password")}
            type="password"
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>
  );
}

export default App;
