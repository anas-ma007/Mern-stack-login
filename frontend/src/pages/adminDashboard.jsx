import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function AdminDashboard() {
    const navigate = useNavigate()
    useEffect(() => {
      if (!localStorage.getItem("admin")) {
        navigate("/admin/login");
      } else {
        navigate('/admin')
      }
    }, [navigate]);
    return (
      <div> <h2> Admin Dashboard </h2></div>
    )
  }


export default AdminDashboard