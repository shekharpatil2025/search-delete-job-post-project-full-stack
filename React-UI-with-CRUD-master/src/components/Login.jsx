  import React, { useState, useContext } from "react";

  import {
    Box,
    Button,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";

  import { useNavigate } from "react-router-dom";

  import API from "../services/api";

  import { AuthContext } from "../context/AuthContext";

  const Login = () => {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [form, setForm] = useState({
      username: "",
      password: "",
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
    const res = await API.post("/auth/login", form);
    login(res.data);  // ✅ let AuthContext handle everything
    navigate("/");
  } catch (err) {
    console.log(err);
    alert("Invalid Credentials");
  }
};

    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: "#0a0a0f",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "380px",
            background: "#111118",
            padding: "2rem",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              mb: 3,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Login
          </Typography>

          <form onSubmit={handleSubmit}>

            <TextField
              fullWidth
              label="Username"
              name="username"
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{
                style: { color: "#999" },
              }}
              sx={{
                input: { color: "#fff" },

                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#333",
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

            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{
                style: { color: "#999" },
              }}
              sx={{
                input: { color: "#fff" },

                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#333",
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

            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                py: 1.3,
                borderRadius: "10px",
                fontWeight: 600,
                textTransform: "none",
                color: "#0a0a0f",

                background:
                  "linear-gradient(135deg, #7c6af7, #3ecfb2)",

                "&:hover": {
                  opacity: 0.9,
                },
              }}
            >
              Login
            </Button>
            <Button
  onClick={() => window.location.href = "http://localhost:8080/oauth2/authorization/google"}
  sx={{
    width: "100%",
    py: 1.4,
    borderRadius: "12px",
    border: "0.5px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    color: "#fff",
    fontFamily: "'Outfit', sans-serif",
    fontSize: "14px",
    textTransform: "none",
    gap: 1.5,
    "&:hover": { background: "rgba(255,255,255,0.09)" }
  }}
>
  <img src="https://www.google.com/favicon.ico" width={18} />
  Continue with Google
</Button>
          </form>
        </Paper>
      </Box>
    );
  };

  export default Login;