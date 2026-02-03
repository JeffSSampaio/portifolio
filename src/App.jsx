import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
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
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navigate to="/portifolio/homepage" replace />} />
        <Route path='/portifolio/homepage' element={<Homepage />} />
        <Route path='/portifolio/info' element={<Info />} />
        {/* <Route path='/contato' element={<Contato />} />*/}
        {/* <Route path='/feed' element={<Feed />} />*/}
      
        <Route path='/portifolio/projetos' element={<Projetos />} />
        
        <Route path="*" element={<Navigate to="/portifolio/homepage" replace />} />

        <Route path={adminPath} element={<Login />} />
        <Route path={dashboardPath} element={<Dashboard />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App
