import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CityPage from '../pages/CityPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/city/:id" element={<CityPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
