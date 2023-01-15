import Login from './Login'
import MainUi from './MainUi';
// import Edirot from './edirot';
import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/main' element={<MainUi />}></Route>
      </Routes>
      {/* <Login /> */}
      {/* <MainUi/> */}
      {/* <Edirot /> */}
    </div>
  );
}

export default App;
