import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AllTechnologies from "./components/AllTechnologies"; // for /techstack
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <>
      {/* Global custom cursor (mounted once) */}
      <CustomCursor color="#915eff" size={18} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-technologies" element={<AllTechnologies/>} />
      </Routes>
    </>
  );
};

export default App;
