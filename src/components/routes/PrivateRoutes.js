import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";
import axios from "axios";

export default function PrivateRoute() {
  const [auth] = useAuth();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (auth?.token) {
      getCurrentUser();
    }
  }, [auth?.token]); // Include 'auth?.token' as a dependency

  const getCurrentUser = async () => {
    try {
      await axios.get("/current-user", {
        headers: {
          Authorization: auth?.token,
        },
      });
      setOk(true);
    } catch (err) {
      setOk(false);
    }
  };

  return ok ? <Outlet /> : null; // Return null instead of an empty string
}
