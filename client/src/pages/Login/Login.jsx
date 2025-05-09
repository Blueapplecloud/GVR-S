// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { setUser } from "../../redux-slices/userSlice";
import { useDispatch } from "react-redux";
const LoginPage = () => {
  const dispatch = useDispatch();

  const [user, setTheUser] = useState({
    userName: "",
    password: "",
  });

  async function handleLogin() {
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
    } else {
      alert(result.message);
    }
  }
  return (
    <div className="w-full max-w-md s p-8 bg-white shadow-lg rounded-lg hover:!shadow-2xl transition-shadow duration-300 ">
      <h2 className=" font-semibold mb-9 text-3xl text-center text-primaryColor flex items-center justify-center gap-3 ">
        Admin Login{" "}
        <span>
          <FaLock />
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
