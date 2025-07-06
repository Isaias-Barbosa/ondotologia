import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProcedimentosPage from "@/pages/Procedimentos";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import PrivateRoute from "@/components/PrivateRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/procedimentos" element={<ProcedimentosPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
