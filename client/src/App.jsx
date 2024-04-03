
import React,{lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from './pages/Home';
                // OR
const Home= lazy(()=> import("./pages/Home"));
const Login = lazy(()=> import("./pages/Login"));
const Chat = lazy(()=> import("./pages/Chat"));
const Groups = lazy(()=> import("./pages/Groups"));

 
 
 let user = true;

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <span>Header</span> */}
        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/chat/:chatId' element={<Chat/>} />
          <Route path='/groups' element={<Groups/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
       
     
    </>
  )
}

export default App;
 