import { FormWrapper } from "./formWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFeilds: (feilds: Partial<UserData>) => void;
};

export function UserForm({ firstName, lastName, age }: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input autoFocus required type="text" value={firstName}></input>
      <label>Last Name</label>
      <input required type="text" value={lastName}></input>
      <label>Age</label>
      <input required min={1} type="number" value={age}></input>
    </FormWrapper>
  );
}
