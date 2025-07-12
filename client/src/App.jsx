import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import SignIn from './components/SignIn';
import Login from './components/login';
import { BrowserRouter, Routes , Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  const [spass, setspass] = useState(0)
  const [pass, setpass] = useState(0)





  return (
    <div>
     <BrowserRouter>
     <Routes> 
     <Route path='/register' element={<SignIn />}></Route>
     <Route path='/login' element={<Login />}></Route></Routes>
     
     </BrowserRouter>
      {/* <SignIn/> */}
    </div>
  );
}

export default App
