import { FormWrapper } from "./formWrapper";

type AddressFormProps = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

export function AddressForm({ street, city, state, zip }: AddressFormProps) {
  return (
    <FormWrapper title="Address Details">
      <label>Street</label>
      <input autoFocus required type="text" />
      <label>City</label>
      <input required type="text" />
      <label>State</label>
      <input required type="text" />
      <label>Zip</label>
      <input required type="text" />
    </FormWrapper>
  );
}
