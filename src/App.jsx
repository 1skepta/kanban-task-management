import EmptyTask from "./components/EmptyTask";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar /> <EmptyTask />
      </div>
    </div>
  );
}

export default App;
