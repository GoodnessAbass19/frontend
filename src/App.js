import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./Hooks/UseAuthContext";
import Home from "./Pages/home";
import Nav from "./components/Navbar";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="max-w-screen-2xl mx-auto">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to={'/login'} /> } />
            <Route path="/login" element={!user ? <Login /> : <Navigate to={'/'} /> } />
            <Route path="/signup" element={!user ? <SignUp /> : <Navigate to={'/'} /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
