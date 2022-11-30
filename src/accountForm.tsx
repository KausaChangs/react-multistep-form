import { FormWrapper } from "./formWrapper";

type AccountFormProps = {
  email: string;
  password: string;
};

export function AccountForm({ email, password }: AccountFormProps) {
  return (
    <FormWrapper title="Account Details">
      <label>Email</label>
      <input autoFocus required type="email" />
      <label>Password</label>
      <input required type="password" />
    </FormWrapper>
  );
}
