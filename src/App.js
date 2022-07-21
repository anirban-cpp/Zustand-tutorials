import { useEffect } from "react";
import Input from "./components/Input";
import People from "./components/People";
import { useThemeStore } from "./store";

function App() {
  const dark = useThemeStore((state) => state.dark);
  const toggle = useThemeStore((state) => state.toggleDarkMode);

  useEffect(() => {
    if (dark) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="App">
      <button onClick={toggle}>Toogle Dark Mode</button>
      <h1>People</h1>
      <Input />
      <People />
    </div>
  );
}

export default App;
