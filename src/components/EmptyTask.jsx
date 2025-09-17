import { Plus } from "lucide-react";
function EmptyTask() {
  return (
    <div>
      <span>The board is empty. Create a new column to get started.</span>
      <span className="text-white bg-[#635fc7]">
        <Plus /> Add new Column
      </span>
    </div>
  );
}

export default EmptyTask;
