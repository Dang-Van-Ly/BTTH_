import { useState } from "react";

import DisplayInfor from "./DisplayInfor";
import AddUserInfor from './AddUserinfor';


const Mycomponent = (props) => {
   const [users, setUsers] = useState([
      { id: 1, name: "Dung", age: 49 },
      { id: 2, name: "Hoang", age: 17 },
      { id: 3, name: "Chien", age: 32 },
    ]);
    

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  const handleDeleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div>
      <AddUserInfor onAddUser={handleAddUser} />
      <DisplayInfor users={users} onDelete={handleDeleteUser} />
    </div>
  );
};

export default Mycomponent;