import {useState, useEffect} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import API_URL from "./axios/config";
import './App.css';

import { ThemeProvider } from 'styled-components';
import {themes} from "./themes";
import axios from "axios";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(getData, getData);
  }

  const getData = async (position = {}) => {
    console.log(position);
    const {latitude, longitude} = position.coords || "";
  
    const url = latitude && longitude ? `${API_URL}?lat=${latitude}&long=${longitude}` : API_URL;
    console.log(url);
    try {
      const response = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
        <Header setTheme={toggleTheme}/>
        <Main isLoading={isLoading} data={data}/>
    </ThemeProvider>
  );
}

export default App;
