import "./App.css";
import { BrowserRouter } from "react-router-dom";
import API from "./api/axiosConfig"

import AppRoutes from "./routes/AppRoutes";

import ScrollToTop from "./components/common/ScrollToTop";


function App() {
 


  return (
    <BrowserRouter>
      <ScrollToTop />
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

