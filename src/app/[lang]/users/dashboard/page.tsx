import React from "react";
import { WalletCards } from "lucide-react";

export default function UsersDashboard() {
  return (
    <>
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="text-[24px] font-bold">Deploy a New Node</div>
          <div className="text-[14px] font-normal text-[#000000b3]">
            Run a node in less than 30s
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 border border-solid border-[#ececec] px-6 rounded-lg min-h-[36px] cursor-pointer">
          <WalletCards />
          <div className="text-[15px] font-semibold ">Add Credits</div>
        </div>
      </div>

      <div className="w-full flex flex-row flex-wrap"></div>
    </>
  );
}
