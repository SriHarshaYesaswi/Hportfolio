import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AllTechnologies from "./components/AllTechnologies"; // for /techstack
import CustomCursor from "./components/CustomCursor";
import PremiumLoading from "./components/PremiumLoading";

const App = () => {
  return (
    <>
      <CustomCursor />
      <PremiumLoading navigateAfter={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all-technologies" element={<AllTechnologies />} />
      </Routes>
    </>
  );
};

export default App;
