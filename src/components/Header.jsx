import { useState } from "react";
import { ChevronDown, Plus, MoreVertical } from "lucide-react";
import useTodoStore from "../store/useTodoStore";

function Header() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (input.trim() !== "") {
      addTodo(input.trim());
      setInput("");
      setOpen(false);
    }
  };

  return (
    <div className="bg-white flex justify-between px-6 py-6 md:px-9 md:py-8">
      <div className="flex items-center">
        <div className="flex">
          <img src="logo.png" alt="company logo" className="w-9" />
          <h1 className="font-bold ml-3 mr-9 text-2xl hidden md:block">
            kanban
          </h1>
        </div>
        <div className="flex items-center">
          <h1 className="font-semibold text-xl">Platform Launch</h1>
          <ChevronDown size={20} className="text-[#635fc7] md:hidden" />
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => setOpen(true)}
          className="bg-[#635fc7] px-3 py-1 rounded-4xl flex items-center cursor-pointer"
        >
          <Plus size={20} className="text-white font-semibold" />
        </button>
        <MoreVertical size={20} className="ml-2" />
      </div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-semibold mb-4">Add Todo</h2>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full border rounded-lg p-2 mb-4"
              placeholder="Enter your task..."
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="px-4 py-2 rounded-lg bg-[#635fc7] text-white cursor-pointer"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
