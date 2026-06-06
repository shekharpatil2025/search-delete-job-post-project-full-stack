import React, { useContext, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        zIndex: 100,
        background: "#0a0a0f",
        backdropFilter: "none",
        backdropFilter: "blur(20px)",
        borderBottom: "0.5px solid rgba(255,255,255,0.07)",
        boxShadow: scrolled
          ? "0 4px 32px rgba(0,0,0,0.5)"
          : "none",
        transition: "all 0.35s ease",
      }}
    >
      <Toolbar
        sx={{
          px: { xs: "1rem", md: "2.5rem" },
          minHeight: "68px !important",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* ── Logo ── */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            "&:hover .logo-dot": { transform: "scale(1.35)" },
          }}
        >
          {/* Animated dot */}
          <Box
            className="logo-dot"
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7c6af7, #3ecfb2)",
              boxShadow: "0 0 10px rgba(124,106,247,0.6)",
              transition: "transform 0.25s ease",
              flexShrink: 0,
            }}
          />
          <Typography
            sx={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "20px",
              letterSpacing: "-0.3px",
            }}
          >
            <span style={{fontFamily:"'Syne',sans-serif", fontWeight:800, background:"linear-gradient(90deg,#7c6af7,#3ecfb2)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}>Job</span>
            <span style={{color:"#fff"}}>Portal</span>
          </Typography>
        </Box>

        {/* ── Nav Links ── */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>

          {/* Home */}
          <NavBtn to="/" label="Home" active={isActive("/")} />

          {/* Contact Us */}
          <Button
            component="a"
            href="https://telusko.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={linkStyle(false)}
          >
            Contact Us
          </Button>

          {/* Add Job — ADMIN only */}
          {user?.role === "ADMIN" && (
            <NavBtn to="/create" label="Add Job" active={isActive("/create")} />
          )}

          {/* Divider when logged out */}
          {!user && (
            <Box
              sx={{
                width: "1px",
                height: "20px",
                background: "rgba(255,255,255,0.1)",
                mx: 1,
              }}
            />
          )}

          {/* Login / Register — logged out */}
          {!user && (
            <>
              <Button
                component={Link}
                to="/login"
                sx={{
                  ...linkStyle(isActive("/login")),
                  border: "0.5px solid rgba(124,106,247,0.35)",
                  background: "rgba(124,106,247,0.08)",
                  color: "#a99ef5",
                  px: 2.5,
                  "&:hover": {
                    background: "rgba(124,106,247,0.18)",
                    color: "#fff",
                    borderColor: "rgba(124,106,247,0.6)",
                  },
                }}
              >
                Login
              </Button>

              <Button
                component={Link}
                to="/register"
                sx={{
                  ml: 1,
                  px: 2.5,
                  py: 0.9,
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #7c6af7, #3ecfb2)",
                  color: "#0a0a0f",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "13.5px",
                  textTransform: "none",
                  boxShadow: "0 0 18px rgba(124,106,247,0.3)",
                  transition: "all 0.2s",
                  "&:hover": {
                    opacity: 0.88,
                    transform: "translateY(-1px)",
                    boxShadow: "0 0 28px rgba(124,106,247,0.5)",
                    background: "linear-gradient(135deg, #7c6af7, #3ecfb2)",
                  },
                }}
              >
                Register
              </Button>
            </>
          )}

          {/* User pill + Logout — logged in */}
          {user && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, ml: 1 }}>
              {/* Username pill */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  px: 2,
                  py: 0.7,
                  borderRadius: "30px",
                  background: "rgba(124,106,247,0.1)",
                  border: "0.5px solid rgba(124,106,247,0.25)",
                }}
              >
                {/* Avatar dot */}
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#7c6af7,#3ecfb2)",
                    boxShadow: "0 0 6px rgba(124,106,247,0.8)",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "13px",
                    color: "#a99ef5",
                    fontWeight: 500,
                  }}
                >
                  {user.username || user.role}
                </Typography>
              </Box>

              {/* Logout */}
              <Button
                onClick={handleLogout}
                sx={{
                  px: 2.5,
                  py: 0.9,
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #7c6af7, #3ecfb2)",
                  color: "#0a0a0f",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "13.5px",
                  textTransform: "none",
                  boxShadow: "0 0 18px rgba(124,106,247,0.25)",
                  transition: "all 0.2s",
                  "&:hover": {
                    opacity: 0.88,
                    transform: "translateY(-1px)",
                    boxShadow: "0 0 28px rgba(124,106,247,0.45)",
                    background: "linear-gradient(135deg, #7c6af7, #3ecfb2)",
                  },
                }}
              >
                Logout
              </Button>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

/* ── Reusable active-aware nav button ── */
const NavBtn = ({ to, label, active }) => (
  <Button
    component={Link}
    to={to}
    sx={{
      ...linkStyle(active),
      ...(active && {
        color: "#fff",
        background: "rgba(124,106,247,0.12)",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "6px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "16px",
          height: "2px",
          borderRadius: "2px",
          background: "linear-gradient(90deg,#7c6af7,#3ecfb2)",
        },
      }),
    }}
  >
    {label}
  </Button>
);

const linkStyle = (active) => ({
  position: "relative",
  fontSize: "13.5px",
  fontFamily: "'Outfit', sans-serif",
  fontWeight: active ? 600 : 500,
  color: active ? "#fff" : "rgba(255,255,255,0.5)",
  textTransform: "none",
  borderRadius: "10px",
  px: 2,
  py: 0.9,
  transition: "all 0.2s",
  "&:hover": {
    color: "#fff",
    background: "rgba(255,255,255,0.06)",
  },
});

export default Navbar;