import { type ReactNode } from "react";

type MessageProps = {
  mode: "allowed" | "not allowed";
  children: ReactNode;
};

function Message({ mode, children }: MessageProps) {
  if (mode === "allowed") {
    return (
      <div className="text-center text-lg">
        <p>{children}</p>
      </div>
    );
  }
  return (
    <div className="text-center text-lg text-yellow-600">
      <p>{children}</p>
    </div>
  );
}

export default Message;
