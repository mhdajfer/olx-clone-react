import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import DataContextProvider from "./Context/DataContextProvider";

function App() {
  return (
    <>
      <DataContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </DataContextProvider>
    </>
  );
}

export default App;
