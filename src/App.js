import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./HOME/Home";
import Admin from "./Admin";
import 'rsuite/dist/rsuite-no-reset.min.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
    </Routes>
  );
}

export default App;
