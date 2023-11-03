import { Route, Routes } from "react-router-dom";
import { RandomMaths } from "../views/pages/RandomMaths/RandomMaths";

export const GamesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RandomMaths />} />
      <Route path="/random-maths" element={<RandomMaths />} />
    </Routes>
  );
};
