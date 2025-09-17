import { Plus } from "lucide-react";

function EmptyTask() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="px-8 text-center">
        <span className="font-semibold text-gray-400 block mb-4">
          The board is empty. Create a new column to get started.
        </span>
        <div className="text-white bg-[#635fc7] px-4 py-2 font-semibold flex items-center gap-2 justify-center rounded-3xl cursor-pointer hover:bg-[#4e4bb8] transition">
          <Plus size={18} />
          <span>Add new Column</span>
        </div>
      </div>
    </div>
  );
}

export default EmptyTask;
