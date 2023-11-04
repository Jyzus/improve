import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../views/pages/home/Home";
import { GamesRoutes } from "./GamesRoutes";
import Navbar from "../views/components/navigation/Navbar";
import { useAuthStore } from "../store/auth";

export const Router = () => {
  const status = useAuthStore((state) => state.status);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/games/*"
            element={
              status == "not logged" ? <Navigate to={"/"} /> : <GamesRoutes />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
