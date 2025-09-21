import { useState } from "react";
import { Plus } from "lucide-react";
import useTodoStore from "../store/useTodoStore";

function EmptyTask() {
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (input.trim() !== "") {
      addTodo(input.trim());
      setInput("");
      setShowInput(false);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="px-8 text-center">
        <span className="font-semibold text-gray-400 block mb-4">
          The board is empty. Create a new task to get started.
        </span>

        {showInput ? (
          <div className="bg-white shadow-md rounded-lg p-6 w-80 mx-auto">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              placeholder="Enter your task..."
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowInput(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="px-4 py-2 rounded-lg bg-[#635fc7] text-white text-sm"
              >
                Add
              </button>
            </div>
          </div>
        ) : (
          <div
            className="text-white bg-[#635fc7] px-4 py-3 font-semibold flex items-center gap-2 justify-center rounded-3xl cursor-pointer hover:bg-[#4e4bb8] transition"
            onClick={() => setShowInput(true)}
          >
            <Plus size={18} />
            <span>Add new Task</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmptyTask;
