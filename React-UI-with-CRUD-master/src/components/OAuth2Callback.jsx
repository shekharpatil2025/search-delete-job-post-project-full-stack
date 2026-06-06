import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const OAuth2Callback = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token    = params.get("token");
    const username = params.get("username");
    const role     = params.get("role");

    if (token) {
      // Reuse your existing AuthContext login
      login({ token, username, role });
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return <p style={{ color: "#fff" }}>Signing you in...</p>;
};

export default OAuth2Callback;