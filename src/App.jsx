import { useEffect, useState } from "react";
import "./App.css";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { ShowTask } from "./components/ShowTask";

function App() {
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [task, setTask] = useState({});

  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );

  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  //Add task to storage
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
        theme={theme}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
        theme={theme}
      />
    </div>
  );
}

export default App;
