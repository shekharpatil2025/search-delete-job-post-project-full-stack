import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Card, Grid, InputAdornment, TextField, Typography, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import Landing from './Landing';

const Search = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const userRole =  user?.role; // adjust key to match what you store
  const isUser = userRole === "USER";


  const handleEdit = (id) => {
  navigate(`/edit/${id}`);
};

    useEffect(() => {
      if (!user) return;
      const fetchPosts = async () => {
        const response = await API.get(`/jobPosts/keyword/${query}`);  // ← axios → API
        setPost(response.data);
      };
      const fetchInitialPosts = async () => {
        const response = await API.get(`/jobPosts`);                   // ← axios → API
        setPost(response.data);
      };
      fetchInitialPosts();
      if (query.length === 0) fetchInitialPosts();
      if (query.length > 2) fetchPosts();
    }, [query,user]);

  const handleDelete = (id) => {
    async function deletePost() {
      await API.delete(`/jobPost/${id}`);                            // ← axios → API
    }
    deletePost();
    window.location.reload();
  };
   if (!user) return <Landing />;

  return (
    <Box sx={{ background: "#0a0a0f", minHeight: "100vh", padding: "2.5rem" }}>

      {/* Search Bar */}
      <TextField
        placeholder="Search jobs, skills, roles..."
        fullWidth
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#7c6af7" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          mb: 4,
          "& .MuiOutlinedInput-root": {
            background: "#13131a",
            borderRadius: "14px",
            fontFamily: "'Outfit', sans-serif",
            color: "#fff",
            "& fieldset": { borderColor: "rgba(124,106,247,0.3)" },
            "&:hover fieldset": { borderColor: "rgba(124,106,247,0.5)" },
            "&.Mui-focused fieldset": { borderColor: "#7c6af7" },
          },
          "& input::placeholder": { color: "rgba(255,255,255,0.3)" },
          "& input": { padding: "14px 16px", fontSize: "15px" },
        }}
      />

      {/* Job Cards Grid */}
      <Grid container spacing={2.5}>
        {post &&
          post.map((p) => (
            <Grid key={p.id} item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  background: "#13131a",
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "none",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.2s, border-color 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "rgba(124,106,247,0.4)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0, left: 0, right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, #7c6af7, #3ecfb2)",
                  },
                }}
              >
                {/* Job Title */}
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#fff",
                    mb: 1,
                  }}
                >
                  {p.postProfile}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "13px",
                    lineHeight: 1.7,
                    mb: 1.5,
                  }}
                >
                  {p.postDesc}
                </Typography>

                {/* Experience Badge */}
                <Chip
                  label={`${p.reqExperience} yrs experience`}
                  size="small"
                  sx={{
                    mb: 1.5,
                    background: "rgba(62,207,178,0.1)",
                    color: "#3ecfb2",
                    border: "0.5px solid rgba(62,207,178,0.3)",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    borderRadius: "20px",
                  }}
                />

                {/* Skills */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 2 }}>
                  {p.postTechStack.map((s, i) => (
                    <Chip
                      key={i}
                      label={s}
                      size="small"
                      sx={{
                        background: "rgba(124,106,247,0.1)",
                        color: "#a99ef5",
                        border: "0.5px solid rgba(124,106,247,0.25)",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "11px",
                        borderRadius: "20px",
                      }}
                    />
                  ))}
                </Box>

                {/* Actions */}
                {!isUser && (
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    pt: 1.5,
                    borderTop: "0.5px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <Box
                    onClick={() => handleDelete(p.postId)}
                    sx={{
                      display: "flex", alignItems: "center", gap: "5px",
                      fontSize: "12px", fontFamily: "'Outfit', sans-serif",
                      padding: "6px 14px", borderRadius: "8px",
                      border: "0.5px solid rgba(226,75,74,0.4)",
                      background: "rgba(226,75,74,0.08)", color: "#f09595",
                      cursor: "pointer",
                      transition: "background 0.2s",
                      "&:hover": { background: "rgba(226,75,74,0.18)" },
                    }}
                  >
                    <DeleteIcon sx={{ fontSize: 15 }} /> Delete
                  </Box>

                  <Box
                    onClick={() => handleEdit(p.postId)}
                    sx={{
                      display: "flex", alignItems: "center", gap: "5px",
                      fontSize: "12px", fontFamily: "'Outfit', sans-serif",
                      padding: "6px 14px", borderRadius: "8px",
                      border: "0.5px solid rgba(124,106,247,0.4)",
                      background: "rgba(124,106,247,0.08)", color: "#a99ef5",
                      cursor: "pointer",
                      transition: "background 0.2s",
                      "&:hover": { background: "rgba(124,106,247,0.2)" },
                    }}
                  >
                    <EditIcon sx={{ fontSize: 15 }} /> Edit
                  </Box>
                </Box>
                )}
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Search;