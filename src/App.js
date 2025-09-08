import React,{ createContext,useState} from "react"
import Router2 from "./router2";

export const DataContext = createContext()

function App() {
  return (
    <Router2/>
  );
}

export default App;
