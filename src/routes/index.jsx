import { Navigate, Route, Routes } from 'react-router-dom';
import RouteScrollManager from '../components/RouteScrollManager';
import CertificationsProvider from '../context/CertificationsContext';
import Article from '../pages/Article';
import Articles from '../pages/Articles';
import Bio from '../pages/Bio';
import Certifications from '../pages/Certifications';
import Contact from '../pages/Contact';
import Experience from '../pages/Experience';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';

function PortfolioHome() {
  return (
    <>
      <Home/>
      <Bio/>
      <Skills/>
      <Projects/>
      <Experience/>

      <CertificationsProvider>
        <Certifications/>
      </CertificationsProvider>

      <Contact/>
    </>
  );
}

export default function AppRoutes() {
  return (
    <>
      <RouteScrollManager/>

      <Routes>
        <Route path='/' element={<PortfolioHome/>}/>
        <Route path='/artigos' element={<Articles/>}/>
        <Route path='/artigos/:slug' element={<Article/>}/>
        <Route path='*' element={<Navigate to='/' replace/>}/>
      </Routes>
    </>
  );
}
