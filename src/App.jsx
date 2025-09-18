import EmptyTask from "./components/EmptyTask";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import useTodoStore from "./store/useTodoStore";

function App() {
  const columns = useTodoStore((state) => state.columns);
  const isEmpty = Object.values(columns).every((col) => col.items.length === 0);

  return (
    <div>
      <Header />
      <div className="flex">{isEmpty ? <EmptyTask /> : <TodoList />}</div>
    </div>
  );
}

export default App;
