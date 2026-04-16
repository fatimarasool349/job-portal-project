import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
import { loginSuccess } from "./redux/slices/authSlice";


function App() {
  const dispatch = useDispatch();

 useEffect(() => {
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await axios.get(
        "http://localhost:5000/api/auth/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(loginSuccess(res.data.user));
    } catch (error) {
      console.log("Auth restore failed:", error.response?.data);
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