import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/main/LandingPage.jsx";
import MainLayout from "../layouts/mainLayout.jsx";
import AuthPage from "../pages/main/AuthPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
    </Routes>
  );
}
