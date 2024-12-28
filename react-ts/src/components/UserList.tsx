import UserItem from "./UserItem";
import { type UserType } from "../App";
import Message from "./Message";
import { type ReactNode } from "react";
type UserListProps = {
  users: UserType[];
  onDeleteUser: (id: number) => void;
};

function UserList({ users, onDeleteUser }: UserListProps) {
  if (users.length === 0) {
    return <Message mode="allowed">We have no users </Message>;
  }
  let messageText: ReactNode;
  if (users.length >= 3) {
    return <Message mode="not allowed">we have to many users</Message>;
  }
  return (
    <>
      {messageText}
      <div className="flex justify-center flex-wrap">
        {users.map((item) => (
          <div key={item.id} className="w-1/3">
            <UserItem
              id={item.id}
              userName={item.userName}
              onDelete={onDeleteUser}
            >
              <p>{item.email}</p>
            </UserItem>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserList;
