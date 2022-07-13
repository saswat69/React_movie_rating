import Moviecard from "./Moviecard";
import { Row, Col } from 'antd';
import "./App.css"
import { useState } from "react";
import Card from "./Card";
import {Switch,Link,Route,Router,Routes, BrowserRouter} from "react-router-dom";
import ReviewForm from "./Reviewform";
import Comments from "./Comments";

function App() {

  return (
    <Routes>
        <Route exact path="/" element={<Card/>}/>
        <Route exact path="/form" element={<ReviewForm />}/>
        
    </Routes>
  );
}

export default App;
