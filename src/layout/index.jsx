import React from 'react';
import { useSelector } from 'react-redux';
import AppRouter from '../components/appRouter';
import Header from '../components/Header';

const MainLayout = () => {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);

  return isAuth ? (
    <>
      <Header />
      <AppRouter />
    </>
  ) : (
    <AppRouter />
  );
};

export default MainLayout;
