import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const initialData = {
  todo: {
    name: "TODO",
    items: [
      { id: "1", content: "Build UI for onboarding flow" },
      { id: "2", content: "Build UI for search" },
      { id: "3", content: "Create template structures" },
      { id: "4", content: "QA and test all major user journeys" },
    ],
  },
  inProgress: {
    name: "DOING",
    items: [
      { id: "5", content: "Design settings and search pages" },
      { id: "6", content: "Add account management endpoints " },
      { id: "7", content: "Design onboarding flow " },
      { id: "8", content: "Add search endpoints" },
      { id: "9", content: "Add authentication endpoints" },
      {
        id: "10",
        content:
          "Research pricing points of various competitors and trial different business mode",
      },
    ],
  },
  done: {
    name: "DONE",
    items: [
      { id: "11", content: "Conduct 5 wireframe tests" },
      { id: "12", content: "Create wireframe protoypes" },
      { id: "13", content: "Review results of usability tests and iliterate" },
      {
        id: "14",
        content:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
      },
    ],
  },
};

function TodoList() {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];
    const sourceItems = [...sourceCol.items];
    const destItems = [...destCol.items];

    if (source.droppableId !== destination.droppableId) {
      const [movedItem] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, movedItem);
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceCol, items: sourceItems },
        [destination.droppableId]: { ...destCol, items: destItems },
      });
    } else {
      const [movedItem] = sourceItems.splice(source.index, 1);
      sourceItems.splice(destination.index, 0, movedItem);
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceCol, items: sourceItems },
      });
    }
  };

  return (
    <div className="p-6 bg-[#E9EFFA] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center"></h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-6 justify-center">
          {Object.entries(columns).map(([id, column]) => (
            <div key={id} className="w-full max-w-sm">
              <h2 className="text-xl font-semibold mb-2">{column.name}</h2>
              <Droppable droppableId={id}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`p-4 rounded-lg min-h-[300px] transition-colors duration-200 ${
                      snapshot.isDraggingOver ? "bg-green-100" : "bg-[#E9EFFA]"
                    }`}
                  >
                    {column.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`p-4 mb-3 bg-gray-50  rounded shadow-sm ${
                              snapshot.isDragging ? "bg-blue-100" : "bg-white"
                            }`}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default TodoList;
