import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Backdrop,
  CircularProgress,
  Snackbar,
  Alert as MuiAlert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaUnlock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux-slices/userSlice";

// Snackbar Alert wrapper
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [user, setTheUser] = useState({ userName: "", password: "" });

  const [backdropOpen, setBackdropOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [snackbarType, setSnackbarType] = useState("success"); // success | error

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  async function handleLogin() {
    setIsUnlocked(true);
    setBackdropOpen(true);

    setTimeout(() => {
      setIsUnlocked(false);
    }, 1000);

    let dataToSend = new FormData();
    dataToSend.append("name", user.userName);
    dataToSend.append("password", user.password);

    try {
      const response = await fetch("http://localhost:5001/users/login", {
        method: "POST",
        body: dataToSend,
      });

      const result = await response.json();

      setBackdropOpen(false);

      if (result.success) {
        dispatch(setUser(result.user));
        localStorage.setItem("user", JSON.stringify(result.user));

        // Show success snackbar
        setSnackbarMsg(result.message || "Login successful");
        setSnackbarType("success");
        setSnackbarOpen(true);

        setTimeout(() => navigate("/admin/placements"), 2000); // delay navigation
      } else {
        setSnackbarMsg(result.message || "Login failed");
        setSnackbarType("error");
        setSnackbarOpen(true);
      }
    } catch (error) {
      setBackdropOpen(false);
      setSnackbarMsg(error.msg + "Something went wrong. Please try again.");
      setSnackbarType("error");
      setSnackbarOpen(true);
    }
  }

  async function validateLogin() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      let formData = new FormData();
      formData.append("token", user.token);

      const response = await fetch("http://localhost:5001/users/validate", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        dispatch(setUser(result.data));
        navigate("/admin/placements");
      } else {
        localStorage.removeItem("user");
        setSnackbarMsg(result.message || "Session expired");
        setSnackbarType("error");
        setSnackbarOpen(true);
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
            isUnlocked ? "scale-125 text-green-500" : ""
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
          onChange={(e) => setTheUser({ ...user, userName: e.target.value })}
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
          onChange={(e) => setTheUser({ ...user, password: e.target.value })}
          value={user.password}
        />
      </div>

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
        onClick={handleLogin}
      >
        Login
      </Button>

      {/* Backdrop Loader */}
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={backdropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarType}
          sx={{
            backgroundColor: snackbarType === "success" ? "#4caf50" : "#f44336",
            color: "white",
          }}
        >
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LoginPage;
