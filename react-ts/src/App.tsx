import { useState } from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

export type UserType = {
  userName: string;
  email: string;
  id: number;
};
function App() {
  const [users, setUsers] = useState<UserType[]>([]);

  function handleAddUsers(userName: string, email: string) {
    setUsers((prevUser) => {
      const newUser: UserType = {
        id: Math.random(),
        userName: userName,
        email: email,
      };
      return [...prevUser, newUser];
    });
  }

  function handleDeleteUser(id: number) {
    setUsers((prevUsers) => prevUsers.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="py-4 text-center">
        <AddUser onAddUser={handleAddUsers} />
      </div>

      <UserList users={users} onDeleteUser={handleDeleteUser} />
    </>
  );
}

export default App;
