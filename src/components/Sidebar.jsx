import { useState } from "react";
import { Eye, EyeOff, KeyboardMusic } from "lucide-react";

function Sidebar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="">
      <div
        className="bg-[#635fc7] text-white p-4 cursor-pointer flex justify-between items-center"
        onClick={toggleSidebar}
      >
        {isVisible ? <EyeOff /> : <Eye />}
      </div>

      <div
        className={`bg-white transition-all duration-300 ease-in-out overflow-hidden w-64 ${
          isVisible ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } md:flex flex-col px-9`}
      >
        <span className="py-4 font-medium">ALL BOARDS (3)</span>
        <ul className="flex flex-col space-y-2">
          <li>
            <div className="flex items-center">
              <KeyboardMusic className="mr-4" />
              <span>Platform Launch</span>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <KeyboardMusic className="mr-4" />
              <span>Marketing Plan</span>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <KeyboardMusic className="mr-4" />
              <span>Roadmap</span>
            </div>
          </li>
          <li>
            <div className="flex items-center text-[#635fc7] font-semibold">
              <KeyboardMusic className="mr-4" />
              <span>Create New Board</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
