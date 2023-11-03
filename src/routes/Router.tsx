import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../views/pages/home/Home";
import { GamesRoutes } from "./GamesRoutes";
import Navbar from "../views/components/navigation/Navbar";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/games/*" element={<GamesRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
