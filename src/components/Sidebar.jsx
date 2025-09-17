import { Eye, EyeOff, KeyboardMusic } from "lucide-react";

function Sidebar() {
  return (
    <div>
      {/* <div className="bg-[#635fc7]">
        <Eye />
      </div> */}

      <div className="bg-white hidden md:flex flex-col px-6">
        <span>ALL BOARDS (3)</span>
        <div className="flex items-center">
          <ul className="flex flex-col">
            <li className="flex flex-row">
              <div className="flex items-center">
                <KeyboardMusic /> <span>Platform Launch</span>
              </div>
            </li>
            <li>
              <KeyboardMusic /> <span>Marketing Plan</span>
            </li>
            <li>
              <KeyboardMusic /> <span>Roadmap</span>
            </li>
            <li>
              <KeyboardMusic /> <span>Create New Board</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
