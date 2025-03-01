import { useState } from "react";

const AddUserInfor = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) return;
    onAddUser({ name, age: parseInt(age) });
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Your name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Your Age:</label>
      <input value={age} onChange={(e) => setAge(e.target.value)} type="number" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddUserInfor;