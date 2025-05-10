// src/pages/LoginPage.jsx
import React from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
const LoginPage = () => {
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
          label="Email"
          variant="filled"
          fullWidth
          className="bg-white"
        />
      </div>

      <div className="mb-2">
        <TextField
          label="Password"
          type="password"
          variant="filled"
          fullWidth
          className="bg-white"
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
      >
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
