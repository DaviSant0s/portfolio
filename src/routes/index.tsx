import { Routes, Route } from 'react-router-dom';

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/:slug"/>
    </Routes>
  );
};
