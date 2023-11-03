import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../views/pages/home/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
