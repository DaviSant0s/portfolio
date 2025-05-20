import Home from '@/Pages';
import { Routes, Route } from 'react-router-dom';

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:slug"/>
    </Routes>
  );
};
