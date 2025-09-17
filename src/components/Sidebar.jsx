import { Eye, EyeOff, KeyboardMusic } from "lucide-react";

function Sidebar() {
  return (
    <div>
      {/* <div className="bg-[#635fc7]">
        <Eye />
      </div> */}

      <div className="bg-white hidden md:flex flex-col px-9">
        <span>ALL BOARDS (3)</span>
        <div className="flex items-center">
          <ul className="flex flex-col">
            <li className="flex flex-row">
              <div className="flex items-center">
                <KeyboardMusic className="mr-4" /> <span>Platform Launch</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <KeyboardMusic className="mr-4" /> <span>Marketing Plan</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <KeyboardMusic className="mr-4" /> <span>Roadmap</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <KeyboardMusic className="mr-4" /> <span>Create New Board</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
