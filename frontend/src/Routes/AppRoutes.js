import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SermonsAndTeachings from '../Pages/SermonsAndTeachings/SermonsAndTeachings'
import News from "../Pages/News/News";
import Ministry from '../Pages/Ministries/Ministry'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sermons&teachings" element={<SermonsAndTeachings />} />
      <Route path="/news" element={<News />} />
      <Route path="/ministries" element={<Ministry />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes