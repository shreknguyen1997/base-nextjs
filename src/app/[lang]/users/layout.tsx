import React from "react";
import SidebarLeft from "@/src/components/Layouts/UserLayout/SidebarLeft";

export default async function UsersLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      <div className="relative flex min-h-screen flex-row">
        <SidebarLeft />
        <main className="flex-1 flex flex-col">
          <div className="w-[100%] h-[60px] border-b border-solid border-[#0000001a]"></div>
          <div className="ml-[200px] w-[calc(100% - 200px)] p-8 flex flex-col">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
