import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full max-w-7xl mx-auto bg-red-500">{children}</div>
  );
};

export default Container;
