import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import { useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      navigate("/admin/login");
    } else {
      axios.get("/api/admin").then((response) => {
        setUsers(response.data.users);
        navigate("/admin");
      });
    }
  }, [navigate]);
  return (
    <>
      <AdminHeader />
      <div className="adminSearch">
        <input type="text" placeholder="Search" />
        <button className="adminSearchButton">Search</button>
      </div>
      <table className="adminTable">
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <>
                  <button>Edit</button>
                  <button>Delete</button>
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AdminDashboard;
