import Home from "./Home";
import React from "react";
import Detail from "./Detail";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Warp className="App">
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/detail/:week" element={<Detail/>} />
        </Routes>
    </Warp>
  );
}

const Warp = styled.div`
max-width: 350px;
min-height: 60vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid darkseagreen;
`




export default App;