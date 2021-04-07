import {useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css';

import { ThemeProvider } from 'styled-components';
import {themes} from "./themes";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider theme={themes[theme]}>
        <Header setTheme={toggleTheme}/>
        <Main />
    </ThemeProvider>
  );
}

export default App;
