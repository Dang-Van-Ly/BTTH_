const DisplayInfor = ({ users, onDelete }) => {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index} className={user.age <18 ? "red":"blue"}>
          <p>User name: {user.name}</p>
          <p>User Age: {user.age}</p>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      )
        )
      }
    </div>
  );
};

export default DisplayInfor;