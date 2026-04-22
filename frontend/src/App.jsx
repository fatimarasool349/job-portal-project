import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";

import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
import { loginSuccess } from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.data?.user) return;

        dispatch(
          loginSuccess({
            user: res.data.user,
            token,
            role: res.data.user.role,
          }),
        );

        // 🚨 IMPORTANT SAFETY CHECK
        if (!res.data || typeof res.data !== "object") {
          console.log("Invalid response:", res.data);
          return;
        }

        dispatch(
          loginSuccess({
            user: {
              id: res.data.id,
              role: res.data.role,
            },
            token,
            role: res.data.role,
          }),
        );
      } catch (error) {
        console.log("Auth restore failed:", error);
        localStorage.removeItem("token");
      }
    };

    fetchUser();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
