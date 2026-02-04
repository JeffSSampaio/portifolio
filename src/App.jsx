import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Info from './pages/Info'
import Contato from './pages/Contato'
import Feed from './pages/Feed'

import Projetos from './pages/Projetos'

import './styles/index.css'

function App() {
  const adminPath = import.meta.env.VITE_ADMIN_PATH;
  const dashboardPath = import.meta.env.VITE_DASHBOARD_PATH;
  return (
     <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/info" element={<Info />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        
      </Routes>
    </HashRouter>
  );
}

export default App
