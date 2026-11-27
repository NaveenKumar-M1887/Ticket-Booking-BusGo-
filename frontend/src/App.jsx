import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import SearchBuses from './pages/SearchBuses'
import './App.css'
import Register from './pages/Register'
import AdminLayout from './pages/Admin/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import UserDetails from './pages/Admin/UserDetails'
import Settings from './pages/Admin/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search-buses" element={<SearchBuses />} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Admin" element={<AdminLayout/>} >
          <Route path="AdminDashboard" element={<AdminDashboard/>} />
          <Route path="UserDetails" element={<UserDetails/>} />
          <Route path="Settings" element={<Settings/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
