import { create } from "zustand";

const useTodoStore = create((set) => ({
  columns: {
    todo: { name: "TODO", items: [] },
    inProgress: { name: "DOING", items: [] },
    done: { name: "DONE", items: [] },
  },
  addTodo: (content) =>
    set((state) => {
      const newItem = { id: Date.now().toString(), content };
      return {
        columns: {
          ...state.columns,
          todo: {
            ...state.columns.todo,
            items: [...state.columns.todo.items, newItem],
          },
        },
      };
    }),
  moveTodo: (source, destination) =>
    set((state) => {
      const sourceCol = state.columns[source.droppableId];
      const destCol = state.columns[destination.droppableId];
      const sourceItems = [...sourceCol.items];
      const destItems = [...destCol.items];
      const [movedItem] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, movedItem);
      return {
        columns: {
          ...state.columns,
          [source.droppableId]: { ...sourceCol, items: sourceItems },
          [destination.droppableId]: { ...destCol, items: destItems },
        },
      };
    }),
}));
export default useTodoStore;
