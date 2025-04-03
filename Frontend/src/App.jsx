import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/layout/Navbar";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/Login/LoginPage";
import Register from "../pages/Register/Register";
import NotFoundPage from "../pages/NotFoundPage";
import AuthProvider from "../context/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}
