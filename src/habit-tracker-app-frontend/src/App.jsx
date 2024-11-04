import {Navigate, HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import { HabitProvider } from "./context/HabitProvider";
import MainPage from "./pages/MainPage";
import { useEffect, useState } from "react";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // Check local storage on app load for auth status
    const storedAuth = localStorage.getItem('isAuth') === 'true';
    setIsAuth(storedAuth);
  }, []);

  return (
   <HabitProvider>
    <Router>
      <Routes>
        <Route path="/" element={isAuth ? <MainPage setIsAuth={setIsAuth} /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </HabitProvider>
    
  );
};

export default App;