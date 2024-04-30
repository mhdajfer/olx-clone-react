import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import DataContextProvider from "./Context/DataContextProvider";
import Signup from "./Pages/Signup";
import { AuthContextProvider } from "./Context/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <DataContextProvider>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthContextProvider>
      </DataContextProvider>
      <Toaster />
    </>
  );
}

export default App;
