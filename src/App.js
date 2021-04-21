import {useState, useEffect} from "react";
import Header from "./components/layout/Header";
import {Overlay, Message} from "./components/styles/SearchStyles";
import {Text} from "./components/styles/Typography";
import Button from "./components/Button";
import Main from "./components/Main";
import API_URL from "./axios/config";
import './App.css';

import { ThemeProvider } from 'styled-components';
import {themes} from "./themes";
import axios from "axios";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState({data: [], numResults: 10, selectedData: []});
  const [showMessage, setShowMessage] = useState(true);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(getData, getData);
  }

  const getData = async (position = {}) => {
    const {latitude, longitude} = position.coords || "";
    const url = latitude && longitude ? `${API_URL}?lat=${latitude}&long=${longitude}` : API_URL;
    
    try {
      const response = await axios.get(url);
      let initialSelectedData = response.data;
      initialSelectedData = initialSelectedData.slice(0, results.numResults);
      setResults({...results, data: response.data, filtered: false, selectedData: initialSelectedData});
      setIsLoading(false);
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
      <Main isLoading={isLoading} results={results} setResults={setResults}/>
      <Overlay show={showMessage ? true : false}>
        <Message>
          <Text>
            This app was designed to be viewed on a mobile device only.
          </Text>
          <Button type={1} onClick={() => setShowMessage(false)}>OK</Button>
        </Message>
      </Overlay>
    </ThemeProvider>
  );
}

export default App;
