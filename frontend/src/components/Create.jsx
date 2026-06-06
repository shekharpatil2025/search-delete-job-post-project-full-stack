import React, { useState } from "react";
import axios from "axios";
import { Typography, TextField, Button, Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
 import API from "../services/api";

const initial = {
  postId: "",
  postProfile: "",
  reqExperience: 0,
  postTechStack: [],
  postDesc: "",
};

const skillSet = [

  { name: "JavaScript" },
  { name: "Java" },
  { name: "Python" },
  { name: "Django" },
  { name: "Rust" },

  { name: "Spring" },
  { name: "Spring Boot" },
  { name: "SQL" },
  { name: "MySQL" },

  { name: "Machine Learning" },
  { name: "TensorFlow" },
  { name: "PyTorch" },
  { name: "Scikit-learn" },
  { name: "Deep Learning" },
  { name: "MLOps" },

  { name: "React" },
  { name: "CSS" },
  { name: "Node.js" },
  { name: "MongoDB" },

  { name: "Docker" },
  { name: "Kubernetes" },
  { name: "AWS" },
  { name: "Terraform" },

  { name: "Linux" },
  { name: "Shell Scripting" },
  { name: "VMware" },

  { name: "Android" },
  { name: "Kotlin" },
  { name: "Firebase" },

  { name: "Cybersecurity" },
  { name: "SIEM" },
  { name: "Penetration Testing" },

  { name: "Oracle" },
  { name: "SQL Server" },
  { name: "Performance Tuning" },

  { name: "Agile" },
  { name: "Roadmaps" },
  { name: "Stakeholder Management" },

  { name: "Selenium" },
  { name: "JUnit" },
  { name: "Automation Testing" },

  { name: "Unity" },
  { name: "C#" },
  { name: "Game Physics" },

  { name: "Solidity" },
  { name: "Ethereum" },
  { name: "Web3" },

  { name: "Cisco" },
  { name: "Routing" },
  { name: "Firewalls" },

  { name: "UI/UX Design" },
  { name: "Adobe XD" },
  { name: "Prototyping" },

  { name: "Troubleshooting" },
  { name: "Networking" },
  { name: "Customer Support" }

];

const Create = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("/jobPost", form)   // token auto-attached by interceptor
      .then((resp) => console.log(resp.data))
      .catch((error) => console.log(error));
    navigate("/");
};

  const { postId, postProfile, reqExperience, postDesc } = form;

  const handleChange = (e) => {
    const skill = e.target.value;
    setForm((prev) => ({
      ...prev,
      postTechStack: prev.postTechStack.includes(skill)
        ? prev.postTechStack.filter((s) => s !== skill)  // uncheck → remove
        : [...prev.postTechStack, skill]                  // check → add
    }));
};

  const fieldSx = {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      background: "#0d0d14",
      borderRadius: "10px",
      color: "#fff",
      fontFamily: "'Outfit', sans-serif",
      "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
      "&:hover fieldset": { borderColor: "rgba(124,106,247,0.4)" },
      "&.Mui-focused fieldset": { borderColor: "#7c6af7" },
    },
    "& .MuiInputLabel-root": {
      color: "rgba(255,255,255,0.35)",
      fontFamily: "'Outfit', sans-serif",
    },
    "& .MuiInputLabel-root.Mui-focused": { color: "#7c6af7" },
    "& input, & textarea": { color: "#fff", fontFamily: "'Outfit', sans-serif" },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0a0a0f",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "3rem 1rem",
      }}
    >
      <Box
        sx={{
          background: "#13131a",
          border: "0.5px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "2.5rem",
          width: "100%",
          maxWidth: "600px",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "2px",
            background: "linear-gradient(90deg, #7c6af7, #3ecfb2)",
          },
        }}
      >
        <Typography
          align="center"
          sx={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "22px",
            fontWeight: 700,
            color: "#fff",
            mb: 3.5,
          }}
        >
          Create New Job Post
        </Typography>

        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2.5}>

            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Post ID"
                variant="outlined"
                value={postId}
                onChange={(e) => setForm({ ...form, postId: e.target.value })}
                sx={fieldSx}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Job Profile"
                variant="outlined"
                value={postProfile}
                onChange={(e) => setForm({ ...form, postProfile: e.target.value })}
                sx={fieldSx}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Years of Experience"
                variant="outlined"
                value={reqExperience}
                onChange={(e) => setForm({ ...form, reqExperience: e.target.value })}
                sx={fieldSx}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Job Description"
                variant="outlined"
                value={postDesc}
                onChange={(e) => setForm({ ...form, postDesc: e.target.value })}
                sx={fieldSx}
              />
            </Grid>

            {/* Skills */}
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  mb: 1.5,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Required Skills
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2 }}>
                {skillSet.map(({ name }, index) => {
                  const checked = form.postTechStack.includes(name);
                  return (
                    <Box
                      key={index}
                      component="label"
                      htmlFor={`skill-${index}`}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "7px 16px",
                        borderRadius: "30px",
                        border: checked
                          ? "0.5px solid #7c6af7"
                          : "0.5px solid rgba(124,106,247,0.3)",
                        background: checked
                          ? "rgba(124,106,247,0.25)"
                          : "rgba(124,106,247,0.08)",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        "&:hover": { background: "rgba(124,106,247,0.18)" },
                      }}
                    >
                      <input
                        type="checkbox"
                        id={`skill-${index}`}
                        name={name}
                        value={name}
                        onChange={handleChange}
                        style={{ display: "none" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "13px",
                          color: checked ? "#fff" : "#a99ef5",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        {name}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Grid>

            {/* Submit */}
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                sx={{
                  padding: "13px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #7c6af7, #3ecfb2)",
                  color: "#0a0a0f",
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  textTransform: "none",
                  transition: "opacity 0.2s, transform 0.15s",
                  "&:hover": {
                    opacity: 0.88,
                    transform: "translateY(-1px)",
                    background: "linear-gradient(135deg, #7c6af7, #3ecfb2)",
                  },
                }}
              >
                Submit Job Post
              </Button>
            </Grid>

          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Create;