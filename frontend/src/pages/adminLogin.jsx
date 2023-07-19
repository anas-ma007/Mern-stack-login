
import axios from "axios";
import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";


function AdminLogin() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const onsubmit = (e) => {
        e.preventDefault();
        AdminLogin();
    }

    const AdminLogin = async () => {
        const data = {
          email,
          password,
        };
        const response = await axios.post("/api/admin/login", data);
        console.log(response.data, ":asdfghj");
        if (response.data) {
          localStorage.setItem("admin", JSON.stringify(response.data));
          navigate("/admin");
        }
      };

  return (
    <>
      <section className="heading">
        <h1>
            
          <FaSignOutAlt /> Admin Login
        </h1>

        <section className="form">
          <form onSubmit={onsubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter admin email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className="from-group">
              <button type="submit" className="btn btn-block">
                Submit
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

export default AdminLogin;
