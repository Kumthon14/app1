import React,{ createContext,useState} from "react"
import Router3 from "./router3";

export const DataContext = createContext()

function App() {
  return (
    <Router3/>
  );
}

export default App;
