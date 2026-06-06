import React, { useEffect, useRef } from "react";
import { Box, Typography, Button, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const roles = [
  "Full Stack Developer", "ML Engineer", "DevOps Engineer",
  "Backend Developer", "Frontend Developer", "Cybersecurity Analyst",
  "Android Developer", "Data Engineer", "Cloud Architect",
  "QA Engineer", "Blockchain Developer", "UI/UX Designer",
];

const stats = [
  { value: "500+", label: "Job Posts" },
  { value: "40+", label: "Tech Stacks" },
  { value: "Real-time", label: "Search" },
  { value: "Role-based", label: "Access" },
];

const features = [
  {
    icon: "⚡",
    title: "Instant Search",
    desc: "Filter jobs by keyword, tech stack, or role in real time — no page reloads.",
  },
  {
    icon: "🔐",
    title: "Role-based Access",
    desc: "Admins post, edit and delete. Users browse. Clean separation, JWT-secured.",
  },
  {
    icon: "🛠️",
    title: "Tech Stack Matching",
    desc: "Each post carries its required stack so you know exactly what skills are needed.",
  },
];

const Landing = () => {
  const navigate = useNavigate();
  const tickerRef = useRef(null);

  // Infinite ticker animation via JS
  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;
    let x = 0;
    const speed = 0.5;
    const half = el.scrollWidth / 2;
    let raf;
    const tick = () => {
      x -= speed;
      if (Math.abs(x) >= half) x = 0;
      el.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <Box
      sx={{
        background: "#0a0a0f",
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* ── HERO ── */}
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 3,
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,106,247,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          },
        }}
      >
        {/* Grid lines background */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(124,106,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,106,247,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        {/* Badge */}
        <Chip
          label="✦ Built with Spring Boot + React"
          sx={{
            mb: 3,
            background: "rgba(124,106,247,0.12)",
            border: "0.5px solid rgba(124,106,247,0.4)",
            color: "#a99ef5",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "12px",
            letterSpacing: "0.3px",
            animation: "fadeUp 0.6s ease both",
            "@keyframes fadeUp": {
              from: { opacity: 0, transform: "translateY(16px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        />

        {/* Headline */}
        <Typography
          sx={{
            fontFamily: "'Syne', sans-serif",
            fontSize: { xs: "2.6rem", md: "4.2rem" },
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.1,
            maxWidth: "720px",
            mb: 2.5,
            animation: "fadeUp 0.7s 0.1s ease both",
          }}
        >
          Find the right{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg, #7c6af7, #3ecfb2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            tech talent
          </Box>
          , faster.
        </Typography>

        {/* Sub */}
        <Typography
          sx={{
            color: "rgba(255,255,255,0.45)",
            fontSize: { xs: "15px", md: "17px" },
            fontFamily: "'Outfit', sans-serif",
            maxWidth: "500px",
            lineHeight: 1.8,
            mb: 4,
            animation: "fadeUp 0.7s 0.2s ease both",
          }}
        >
          A JWT-secured job board where admins post opportunities and
          candidates discover roles matched to their stack.
        </Typography>

        {/* CTAs */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
            animation: "fadeUp 0.7s 0.3s ease both",
          }}
        >
          <Button
            onClick={() => navigate("/login")}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              background: "linear-gradient(135deg, #7c6af7, #3ecfb2)",
              color: "#0a0a0f",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              textTransform: "none",
              boxShadow: "0 0 32px rgba(124,106,247,0.35)",
              "&:hover": {
                opacity: 0.88,
                transform: "translateY(-2px)",
                boxShadow: "0 0 48px rgba(124,106,247,0.5)",
              },
              transition: "all 0.2s",
            }}
          >
            Sign In
          </Button>
          <Button
            onClick={() => navigate("/register")}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              border: "0.5px solid rgba(124,106,247,0.4)",
              background: "rgba(124,106,247,0.08)",
              color: "#a99ef5",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              textTransform: "none",
              "&:hover": {
                background: "rgba(124,106,247,0.18)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.2s",
            }}
          >
            Register
          </Button>
        </Box>

        {/* Stats row */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 3, md: 6 },
            mt: 7,
            flexWrap: "wrap",
            justifyContent: "center",
            animation: "fadeUp 0.7s 0.4s ease both",
          }}
        >
          {stats.map(({ value, label }) => (
            <Box key={label} sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  background: "linear-gradient(90deg,#7c6af7,#3ecfb2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {value}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: "0.5px",
                }}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── ROLE TICKER ── */}
      <Box
        sx={{
          borderTop: "0.5px solid rgba(255,255,255,0.06)",
          borderBottom: "0.5px solid rgba(255,255,255,0.06)",
          py: 2.5,
          overflow: "hidden",
          background: "rgba(124,106,247,0.04)",
        }}
      >
        <Box ref={tickerRef} sx={{ display: "flex", gap: 4, whiteSpace: "nowrap", width: "max-content" }}>
          {[...roles, ...roles].map((role, i) => (
            <Box
              key={i}
              sx={{ display: "flex", alignItems: "center", gap: 4 }}
            >
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: "0.5px",
                }}
              >
                {role}
              </Typography>
              <Box
                sx={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#7c6af7",
                  flexShrink: 0,
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── FEATURES ── */}
      <Box
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          px: 3,
          py: { xs: 8, md: 12 },
        }}
      >
        <Typography
          align="center"
          sx={{
            fontFamily: "'Syne', sans-serif",
            fontSize: { xs: "1.8rem", md: "2.4rem" },
            fontWeight: 800,
            color: "#fff",
            mb: 1,
          }}
        >
          Everything you need
        </Typography>
        <Typography
          align="center"
          sx={{
            color: "rgba(255,255,255,0.35)",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "15px",
            mb: 7,
          }}
        >
          Designed for both hiring teams and candidates
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" },
            gap: 3,
          }}
        >
          {features.map(({ icon, title, desc }) => (
            <Box
              key={title}
              sx={{
                background: "#13131a",
                border: "0.5px solid rgba(255,255,255,0.07)",
                borderRadius: "18px",
                padding: "28px 24px",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.2s, border-color 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "rgba(124,106,247,0.35)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg,#7c6af7,#3ecfb2)",
                },
              }}
            >
              <Typography sx={{ fontSize: "28px", mb: 2 }}>{icon}</Typography>
              <Typography
                sx={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#fff",
                  mb: 1,
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "13.5px",
                  lineHeight: 1.75,
                }}
              >
                {desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── CTA FOOTER BAND ── */}
      <Box
        sx={{
          borderTop: "0.5px solid rgba(255,255,255,0.06)",
          py: { xs: 8, md: 10 },
          textAlign: "center",
          px: 3,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(62,207,178,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Syne', sans-serif",
            fontSize: { xs: "1.6rem", md: "2.2rem" },
            fontWeight: 800,
            color: "#fff",
            mb: 1.5,
          }}
        >
          Ready to explore opportunities?
        </Typography>
        <Typography
          sx={{
            color: "rgba(255,255,255,0.35)",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "15px",
            mb: 4,
          }}
        >
          Sign in to browse live job posts or register to get started.
        </Typography>
        <Button
          onClick={() => navigate("/login")}
          sx={{
            px: 5,
            py: 1.6,
            borderRadius: "12px",
            background: "linear-gradient(135deg,#7c6af7,#3ecfb2)",
            color: "#0a0a0f",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            textTransform: "none",
            boxShadow: "0 0 40px rgba(62,207,178,0.2)",
            "&:hover": {
              opacity: 0.88,
              transform: "translateY(-2px)",
            },
            transition: "all 0.2s",
          }}
        >
          Get Started →
        </Button>
      </Box>
    </Box>
  );
};

export default Landing;