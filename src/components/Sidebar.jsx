import { useState } from "react";
import { Eye, EyeOff, KeyboardMusic } from "lucide-react";

function Sidebar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full z-50 transition-all duration-300 ease-in-out ${
        isVisible ? "w-16" : "w-64"
      }`}
      style={{ boxShadow: "2px 0 8px rgba(0,0,0,0.08)" }}
    >
      <div
        className={`bg-[#635fc7] text-white p-4 cursor-pointer flex items-center justify-center h-16 transition-all duration-300 ${
          isVisible ? "w-16" : "w-64"
        }`}
        onClick={toggleSidebar}
        style={{
          borderTopRightRadius: isVisible ? "1rem" : "0",
          borderBottomRightRadius: isVisible ? "1rem" : "0",
        }}
      >
        {isVisible ? <Eye /> : <EyeOff />}
      </div>

      <div
        className={`bg-white transition-all duration-300 ease-in-out overflow-hidden flex flex-col ${
          isVisible ? "w-0 opacity-0" : "w-64 opacity-100 px-9"
        }`}
        style={{
          position: "absolute",
          left: isVisible ? "-100%" : "0",
          top: "4rem",
          height: "calc(100% - 4rem)",
        }}
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
