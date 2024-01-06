import { useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/auth";

export default function AccountActivate() {
  // context
  const [, setAuth] = useAuth();
  // hooks
  const { token } = useParams();
  const navigate = useNavigate();

  const requestActivation = useCallback(async () => {
    try {
      console.log("Requesting activation...");
      const { data } = await axios.post(`/register`, { token });
      console.log("Activation response:", data);

      if (data?.error) {
        toast.error(data.error);
      } else {
        // save in local storage
        localStorage.setItem("auth", JSON.stringify(data));
        // save in context
        setAuth(data);
        toast.success("Successfully logged in. Welcome to Realist app.");
        navigate("/");
      }
    } catch (err) {
      console.error("Activation error:", err);
      if (err.response) {
        // The request was made and the server responded with a status code
        // but it might contain error details
      } else if (err.request) {
        // The request was made but no response was received
        toast.error("No response received from the server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an error
        toast.error("Request setup error. Please try again later.");
      }
    }
  }, [token, navigate, setAuth]);

  useEffect(() => {
    if (token) {
      requestActivation();
    }
  }, [token, requestActivation]);

  return (
    <div
      className="display-1 d-flex justify-content-center align-items-center vh-100"
      style={{ marginTop: "-5%" }}
    >
      Please wait...
    </div>
  );
}
