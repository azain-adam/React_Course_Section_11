import React, { useEffect, useState } from "react";
import MainHeader from "./components/MainHeader";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const storeUserLoginInfo = localStorage.getItem('isLoggedIn');
    if(storeUserLoginInfo === '1') {
      setIsLoggedIn(true);
    }

  }, []);

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={handleLogout} />
      <main>
        {!isLoggedIn && <Login onLogin={handleLogin} />}
        {isLoggedIn && <Home onLogout={handleLogout} />}
      </main>
    </>
  );
};

export default App;
