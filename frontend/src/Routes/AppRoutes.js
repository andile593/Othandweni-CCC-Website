import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SermonsAndTeachings from '../Pages/SermonsAndTeachings/SermonsAndTeachings'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sermons&teachings" element={<SermonsAndTeachings />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes