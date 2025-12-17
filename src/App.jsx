import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App() {
  const adminPath = import.meta.env.VITE_ADMIN_PATH;
  const dashboardPath = import.meta.env.VITE_DASHBOARD_PATH;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />

        <Route path={adminPath} element={<Login />} />
        <Route path={dashboardPath} element={<Dashboard />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App
