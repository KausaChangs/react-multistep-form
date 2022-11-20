export function UserForm() {
  <>
    <label>First Name</label>
    <input autoFocus required type="text"></input>
    <label>Last Name</label>
    <input required type="text"></input>
    <label>Age</label>
    <input required min={1} type="number"></input>
  </>;
}
