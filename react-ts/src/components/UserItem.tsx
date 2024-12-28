import { type PropsWithChildren } from "react";
// type UserListProps = {
//   userName: string;
//   email: string;
// };

// interface UserListProps {
//   userName: string;
//   children: ReactNode;
// }

type UserItemProps = PropsWithChildren<{
  id: number;
  userName: string;
  onDelete: (id: number) => void;
}>;

function UserItem({ userName, id, children, onDelete }: UserItemProps) {
  return (
    <div className="flex flex-wrap justify-center max-w-xl mx-auto my-10 gap-5">
      <div className="p-4 m-4 text-center bg-slate-800 rounded-md w-2/5">
        <p className="p-1 font-bold text-lg ">{userName}</p>
        <p className="p-1">{children}</p>
        <button
          onClick={() => onDelete(id)}
          className="px-4 py-2 mt-4 bg-slate-900 text-slate-100 rounded-md"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default UserItem;
