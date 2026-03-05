import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AllTechnologies from "./components/AllTechnologies"; // for /techstack
import CustomCursor from "./components/CustomCursor";
import PremiumLoading from "./components/PremiumLoading";

import { useState } from "react";

const App = () => {
  const [appReady, setAppReady] = useState(false);

  return (
    <>
      <CustomCursor />
      <PremiumLoading navigateAfter={false} onDone={() => setAppReady(true)} />
      {appReady && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/all-technologies" element={<AllTechnologies />} />
        </Routes>
      )}
    </>
  );
};

export default App;
