import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AuthNavBar from "./components/navBar/NavBar";
import { GlobalStoreProvider } from "./components/StoreContex";
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <GlobalStoreProvider>
            <ToastContainer position="top-right" autoClose={3000} />

      <BrowserRouter>
        <Routes>
          {/* Login routes */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          {/* nav bar componets */}
          <Route path="/home" element={<AuthNavBar />} />
        </Routes>
      </BrowserRouter>
    </GlobalStoreProvider>
  );
};

export default App;
