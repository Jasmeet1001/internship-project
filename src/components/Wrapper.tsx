import React from "react";
import Home from "./ui/home";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-full">
      <Home />
      {/* <Navigation /> */}
      <div className="flex-1 h-full overflow-y-auto overflow-x-auto">
        {children}
      </div>
    </main>
  );
};

export default Wrapper;
