import './App.css';
import React from 'react';
import { Header } from '../Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MatrixPage } from '../pages/MatrixPage/MatrixPage';

export const App = () => {
  return (
    <>
      <Header />
      <main className="main__wrapper">
        <Routes>
          <Route path="/" element={<MatrixPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
};
