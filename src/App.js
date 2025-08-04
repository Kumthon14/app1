import React from "react"
import {Header,Content,Footer} from './func-components'
import {Button} from "./class-components";
import {Calculator2} from "./calculator";

function App() {
  return (
    [
    <Header/>,
    <p><center><Calculator2/></center></p>,
    <p><center><Button/></center></p>,
    <Content/>,
    <Footer/>
    ]
  );
}

export default App;
