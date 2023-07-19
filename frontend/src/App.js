import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login'
import Register from "./pages/Register";
import AdminLogin from "./pages/adminLogin"; 
import AdminDashboard from "./pages/adminDashboard";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={ <Dashboard/> }> </Route>
            <Route path="/login" element={ <Login/> }> </Route>
            <Route path="/register" element={ <Register/> }> </Route>
            <Route path="/admin/login" element={ <AdminLogin /> }> </Route>
            <Route path="/admin" element={ <AdminDashboard /> }> </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  )
}

export default App;
