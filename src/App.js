import "./App.css"
import Card from "./Card";
import {Route,Routes} from "react-router-dom";
import ReviewForm from "./Reviewform";


function App() {

  return (
    <Routes>
        <Route exact path="/" element={<Card/>}/>
        <Route exact path="/form" element={<ReviewForm />}/>
        
    </Routes>
  );
}

export default App;
