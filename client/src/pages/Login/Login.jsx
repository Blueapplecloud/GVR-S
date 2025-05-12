import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FaLock, FaUnlock } from "react-icons/fa";
import { setUser } from "../../redux-slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isUnlocked, setIsUnlocked] = useState(false); // State to toggle lock/unlock

  const [user, setTheUser] = useState({
    userName: "",
    password: "",
  });

  async function handleLogin() {
    setIsUnlocked(!isUnlocked);
    setTimeout(() => {
      setIsUnlocked(false);
    }, 3000);
    let dataToSend = new FormData();
    dataToSend.append("name", user.userName);
    dataToSend.append("password", user.password);
    let requestOptions = {
      method: "POST",
      body: dataToSend,
    };

    let response = await fetch(
      "http://localhost:5001/users/login",
      requestOptions
    );
    let result = await response.json();

    if (result.success) {
      alert(result.message);
      dispatch(setUser(result.user));
      alert("Welcome to the Administration " + result.user.name);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/admin/placements");
    } else {
      alert(result.message);
    }
  }
  async function validateLogin() {
    let user = JSON.parse(localStorage.getItem("user"));
    let formData = new FormData();
    if (user) {
      formData.append("token", user.token);
      let requestOptions = {
        method: "POST",
        body: formData,
      };
      let response = await fetch(
        "http://localhost:5001/users/validate",
        requestOptions
      );
      let result = await response.json();

      if (result.success) {
        dispatch(setUser(result.data));
        navigate("/admin/placements");
      } else {
        alert(result.message);
      }
    }
  }
  useEffect(() => {
    if (localStorage.getItem("user")) {
      validateLogin();
    }
  }, []);
  return (
    <div className="w-full max-w-md s p-8 bg-white shadow-lg rounded-lg hover:!shadow-2xl transition-shadow duration-300">
      <h2 className="font-semibold mb-9 text-3xl text-center text-primaryColor flex items-center justify-center gap-3">
        Admin Login
        <span
          className={`transition-transform duration-500 ${
            isUnlocked ? " scale-125 text-green-500" : ""
          }`}
        >
          {isUnlocked ? <FaUnlock /> : <FaLock />}
        </span>
      </h2>

      <div className="mb-4">
        <TextField
          label="Username"
          variant="filled"
          fullWidth
          className="bg-white"
          onChange={(e) => {
            setTheUser({ ...user, userName: e.target.value });
          }}
          value={user.userName}
        />
      </div>

      <div className="mb-2">
        <TextField
          label="Password"
          type="password"
          variant="filled"
          fullWidth
          className="bg-white"
          onChange={(e) => {
            setTheUser({ ...user, password: e.target.value });
          }}
          value={user.password}
        />
      </div>

      {/* Forgot Password Link */}
      <div className="mb-6 text-right">
        <Link
          to="/forgot-password"
          className="text-sm text-blue-600 hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="!bg-primaryColor hover:!bg-gray-500 text-white"
        onClick={() => {
          handleLogin();
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
