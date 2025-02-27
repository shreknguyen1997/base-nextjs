import react from "react";
import { BadgeDollarSign, House, Server, Wallet } from "lucide-react";

export default function SidebarLeft() {
  return (
    <div className="flex flex-col w-[200px] h-[100vh] justify-between border-r border-solid border-[#0000001a] fixed">
      <div className="flex flex-col w-full flex-1">
        <div className="flex flex-row gap-2 items-center p-3 w-full h-[60px]">
          <img
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa7a10cb31a5b5b2272a71192916f39ec.cdn.bubble.io%2Ff1708140296597x873103303219385000%2FScreenshot%25202024-02-17%2520at%252012.59.43%2520AM.png?w=48&h=46&auto=compress&dpr=2&fit=max"
            alt="logo"
            className="w-[30px] h-[30px]"
          />
          <div className="text-base font-bold">Rapid Node</div>
        </div>

        <div className="flex flex-row items-center gap-2 py-3 px-5 w-full cursor-pointer">
          <House size={"20px"} />
          <div className="text-sm">Dashboard</div>
        </div>

        <div className="flex flex-row items-center  gap-2 py-3 px-5 w-ful cursor-pointer">
          <Server size={"20px"} />
          <div className="text-sm">Active Nodes</div>
        </div>

        <div className="flex flex-row items-center gap-2 py-3 px-5 w-ful cursor-pointer">
          <Wallet size={"20px"} />
          <div className="text-sm">Wallets</div>
        </div>

        <div className="flex flex-row items-center gap-2 py-3 px-5 w-ful cursor-pointer">
          <BadgeDollarSign size={"20px"} />
          <div className="text-sm">Billing</div>
        </div>
      </div>
      <div className="flex flex-col w-full h-[10%] justify-self-end self-end place-self-end min-h-[120px] p-3 border-t border-solid border-[#0000001a]">
        <div className="flex flex-row items-center justify-center gap-2 p-2">
          <img
            src="assets/images/next.svg"
            className="w-[30px] h-[30px] border border-solid border-spacing-0 rounded-full"
          />
          <div className="text-xs truncate">lptuananh2611@gmail.com</div>
        </div>

        <div className="border border-solid border-[#0000001a] text-xs font-semibold text-center p-3 rounded-md hover:bg-[rgba(67,160,71,0.08)] cursor-pointer">
          Logout
        </div>
      </div>
    </div>
  );
}
