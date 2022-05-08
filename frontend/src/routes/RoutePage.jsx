import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "../components";
import { Home } from "../pages";
import { ScrollToTop } from "../services/ScrollToTop";

export default function RoutePage() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
