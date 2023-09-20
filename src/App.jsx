import { Routes, Route } from "react-router-dom";

import Home from "./components/Boards/Home";
import Navbar from "./components/Navbar";
import Lists from "./components/Lists/Lists";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists/:id" element={<Lists />} />
      </Routes>
    </>
  );
}

export default App;
