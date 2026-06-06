import React, { useEffect, useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
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

const Edit = () => {

  const [form, setForm] = useState(initial);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {

  const fetchInitialPosts = async () => {

    const response = await API.get(
  `/jobPost/${id}`
);
    console.log(response.data);
    setForm(response.data);
  };

  fetchInitialPosts();

}, [id]);

  // ✅ Fix handleSubmit — POST → PUT, add navigate
const handleSubmit = (e) => {
  e.preventDefault();
  API.put("/jobPost", form)          // ← POST → PUT, axios → API
    .then((resp) => {
      console.log(resp.data);
      navigate("/");                 // ← navigate after success
    })
    .catch((error) => {
      console.log(error);
    });
};

  const handleChange = (e) => {

    const { value, checked } = e.target;

    if (checked) {
      setForm({
        ...form,
        postTechStack: [...form.postTechStack, value],
      });
    } else {
      setForm({
        ...form,
        postTechStack: form.postTechStack.filter(
          (skill) => skill !== value
        ),
      });
    }
  };

  // Shared field styles
  const fieldSx = {
    width: "100%",
    mb: 2.5,
    "& .MuiOutlinedInput-root": {
      background: "#0d0d14",
      borderRadius: "10px",
      color: "#fff",
      fontFamily: "'Outfit', sans-serif",
      "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
      "&:hover fieldset": { borderColor: "rgba(124,106,247,0.4)" },
      "&.Mui-focused fieldset": { borderColor: "#7c6af7" },
    },
    "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.35)", fontFamily: "'Outfit', sans-serif" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#7c6af7" },
    "& input, & textarea": { color: "#fff", fontFamily: "'Outfit', sans-serif" },
  };

  return (
    <Box
      sx={{
        background: "#0a0a0f",
        minHeight: "100vh",
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
          maxWidth: "560px",
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
          Edit Job Post
        </Typography>

        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <TextField
            type="number"
            sx={fieldSx}
            onChange={(e) => setForm({ ...form, postId: e.target.value })}
            label="Post ID"
            variant="outlined"
            value={form.postId}
          />
          <TextField
            type="text"
            sx={fieldSx}
            required
            onChange={(e) => setForm({ ...form, postProfile: e.target.value })}
            label="Job Profile"
            variant="outlined"
            value={form.postProfile}
          />
          <TextField
            type="number"
            sx={fieldSx}
            required
            onChange={(e) => setForm({ ...form, reqExperience: e.target.value })}
            label="Years of Experience"
            variant="outlined"
            value={form.reqExperience}
          />
          <TextField
            type="text"
            sx={fieldSx}
            required
            multiline
            rows={4}
            onChange={(e) => setForm({ ...form, postDesc: e.target.value })}
            label="Job Description"
            variant="outlined"
            value={form.postDesc}
          />

          {/* Skills */}
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

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2, mb: 3 }}>

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
                    gap: "7px",
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

                    "&:hover": {
                      background: "rgba(124,106,247,0.18)",
                    },
                  }}
                >

                  <input
                    type="checkbox"
                    id={`skill-${index}`}
                    name={name}
                    value={name}

                    // VERY IMPORTANT
                    checked={checked}

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

          <Button
            type="submit"
            fullWidth
            sx={{
              padding: "13px",
              borderRadius: "12px",
              border: "none",
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
            Save Changes
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Edit;