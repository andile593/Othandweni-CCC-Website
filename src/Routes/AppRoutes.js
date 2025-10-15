import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SermonsAndTeachings from "../Pages/SermonsAndTeachings/SermonsAndTeachings";
import News from "../Pages/News/News";
import Ministry from "../Pages/Ministries/Ministry";
import Gallery from "../Pages/Gallery/Gallery";
import Donate from "../Pages/Donate/Donate";
import Contact from "../Pages/Contact/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sermons&teachings" element={<SermonsAndTeachings />} />
      <Route path="/news" element={<News />} />
      <Route path="/ministries" element={<Ministry />} />
      <Route path="/media" element={<Gallery />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
