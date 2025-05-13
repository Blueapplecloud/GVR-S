import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

// Snackbar Alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AdminBackdrop() {
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  const handleLogout = () => {
    setOpenBackdrop(true);

    setTimeout(() => {
      localStorage.removeItem("user");
      setOpenBackdrop(false);
      setOpenSnackbar(true);
    }, 1000);

    // Wait for snackbar to be visible, then navigate
    setTimeout(() => {
      navigate("/");
    }, 2000); // Snackbar visible for 2s + loader 1s
  };

  return (
    <div>
      <Button
        onClick={handleLogout}
        className="!bg-primaryColor !text-white py-2 px-4 rounded-lg gap-2"
      >
        Logout <IoLogOut className="text-2xl" />
      </Button>

      {/* Backdrop */}
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={openBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ backgroundColor: "#4caf50", color: "white" }}
          icon={<IoLogOut />}
        >
          Logged out successfully
        </Alert>
      </Snackbar>
    </div>
  );
}
