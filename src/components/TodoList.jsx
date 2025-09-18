import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import useTodoStore from "../store/useTodoStore";

function TodoList() {
  const { columns, moveTodo } = useTodoStore();

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    moveTodo(source, destination);
  };

  return (
    <div className="p-6 bg-[#E9EFFA] min-h-screen">
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
                      snapshot.isDraggingOver ? "bg-[#dbeafe]" : "bg-[#E9EFFA]"
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
                            className={`p-4 mb-3 rounded shadow-sm ${
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
