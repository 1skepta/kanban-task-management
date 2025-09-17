import { ChevronDown, Plus, MoreVertical } from "lucide-react";

function Header() {
  return (
    <div className="bg-white flex justify-between px-6 py-6">
      <div className="flex">
        <div>
          <span>Logo</span>
        </div>
        <div className="flex items-center">
          <h1 className="font-semibold text-xl">Platform Launch</h1>
          <ChevronDown size={20} className="text-[#635fc7]" />
        </div>
      </div>
      <div className="flex items-center">
        <span className="bg-[#635fc7] px-3 py-1 rounded-4xl flex items-center">
          <Plus size={20} className="text-white font-semibold" />
        </span>
        <MoreVertical size={20} className="ml-2" />
      </div>
    </div>
  );
}

export default Header;
