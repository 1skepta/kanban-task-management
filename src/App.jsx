import EmptyTask from "./components/EmptyTask";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        {/* <Sidebar /> */}
        {/* <EmptyTask /> */}
        <TodoList />
      </div>
    </div>
  );
}

export default App;
