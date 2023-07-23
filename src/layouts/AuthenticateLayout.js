import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthenticateLayout = () => {
  const isLogin = true;
  useEffect(() => {
    if (!isLogin) return <Navigate to="/" />;
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthenticateLayout;
