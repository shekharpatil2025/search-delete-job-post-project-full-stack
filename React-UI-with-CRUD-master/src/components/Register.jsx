import React, { useState } from "react";

import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

const Register = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/auth/register",
        form
      );

      alert("Registered Successfully");

      navigate("/login");

    } catch (err) {

      console.log(err);

      alert("Registration Failed");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0a0a0f, #12121a)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: "420px",
          background: "#111118",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "2.5rem",
          boxShadow:
            "0 10px 40px rgba(0,0,0,0.45)",
        }}
      >

        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: 700,
            textAlign: "center",
            mb: 1,
          }}
        >
          Create Account
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.55)",
            textAlign: "center",
            mb: 4,
            fontSize: "14px",
          }}
        >
          Register to access the Job Portal
        </Typography>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Username */}
          <TextField
            fullWidth
            label="Username"
            name="username"
            onChange={handleChange}
            margin="normal"

            InputLabelProps={{
              style: {
                color: "#888",
              },
            }}

            sx={{
              input: {
                color: "#fff",
              },

              "& .MuiOutlinedInput-root": {

                borderRadius: "12px",

                "& fieldset": {
                  borderColor: "#2a2a35",
                },

                "&:hover fieldset": {
                  borderColor: "#7c6af7",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#7c6af7",
                },
              },
            }}
          />

          {/* Password */}
          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            onChange={handleChange}
            margin="normal"

            InputLabelProps={{
              style: {
                color: "#888",
              },
            }}

            sx={{
              input: {
                color: "#fff",
              },

              "& .MuiOutlinedInput-root": {

                borderRadius: "12px",

                "& fieldset": {
                  borderColor: "#2a2a35",
                },

                "&:hover fieldset": {
                  borderColor: "#3ecfb2",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#3ecfb2",
                },
              },
            }}
          />

          {/* Role */}
          <TextField
            select
            fullWidth
            label="Role"
            name="role"
            value={form.role}
            onChange={handleChange}
            margin="normal"

            InputLabelProps={{
              style: {
                color: "#888",
              },
            }}

            sx={{
              "& .MuiOutlinedInput-root": {

                borderRadius: "12px",
                color: "#fff",

                "& fieldset": {
                  borderColor: "#2a2a35",
                },

                "&:hover fieldset": {
                  borderColor: "#7c6af7",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#7c6af7",
                },
              },

              "& .MuiSvgIcon-root": {
                color: "#fff",
              },
            }}
          >
            <MenuItem value="ROLE_USER">
              ROLE_USER
            </MenuItem>

            <MenuItem value="ROLE_ADMIN">
              ROLE_ADMIN
            </MenuItem>
          </TextField>

          {/* Button */}
          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 4,
              py: 1.4,
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "15px",
              textTransform: "none",

              color: "#0a0a0f",

              background:
                "linear-gradient(135deg, #7c6af7, #3ecfb2)",

              "&:hover": {
                opacity: 0.9,
                transform: "translateY(-1px)",
              },

              transition: "0.2s",
            }}
          >
            Register
          </Button>
        </form>

        {/* Bottom Text */}
        <Typography
          sx={{
            mt: 3,
            textAlign: "center",
            color: "rgba(255,255,255,0.5)",
            fontSize: "14px",
          }}
        >
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            style={{
              color: "#7c6af7",
              marginLeft: "6px",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Login
          </span>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;