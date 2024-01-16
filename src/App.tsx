import React from "react";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/ReuseableForm";
import Container from "./components/ui/Container";
import { FieldValues, useForm } from "react-hook-form";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container>
      <Form double={true} onSubmit={handleSubmit(onSubmit)}>
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
