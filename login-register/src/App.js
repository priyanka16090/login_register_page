import logo from './logo.svg';
import { IconName } from "react-icons/fa";
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Password from './Components/Forgot';
// import {Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot" element={<Password/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// {
//   !localStorage.getItem('token') ? <Redirect from='/' to='/login' /> : ''
// }  