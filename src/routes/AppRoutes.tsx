import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Results from "../pages/Results";
import GameDetail from "../pages/GameDetail";
import TermOfUse from "../pages/TermOfUse";
import AdvanceResults from "../pages/AdvanceResults";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
      <Route path="/filters-results" element={<AdvanceResults />} />
      <Route path="/game/:id" element={<GameDetail />} />
      <Route path="/term-of-use" element={<TermOfUse />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
