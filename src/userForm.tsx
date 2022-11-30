import { FormWrapper } from "./formWrapper";

type UserFormProps = {
  firstName: string;
  lastName: string;
  age: string;
};

export function UserForm({ firstName, lastName, age }: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input autoFocus required type="text"></input>
      <label>Last Name</label>
      <input required type="text"></input>
      <label>Age</label>
      <input required min={1} type="number"></input>
    </FormWrapper>
  );
}
