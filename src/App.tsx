import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProfileListPage from './pages/ProfileListPage';
import ProfileDetailsPage from './pages/ProfileDetailsPage';
import AdminPage from './pages/AdminPage';
import MainLayout from './layouts/MainLayout';

const App: React.FC = () => {
  return (

    <Routes>
      <Route path="/" element={<MainLayout><ProfileListPage /></MainLayout>} />
      <Route path="/profile/:profileId" element={<MainLayout><ProfileDetailsPage /></MainLayout>} />
      <Route path="/admin" element={<MainLayout><AdminPage /></MainLayout>} />
    </Routes>

  );
};

export default App;
