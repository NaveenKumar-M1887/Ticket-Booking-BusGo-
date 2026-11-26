import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import SearchBuses from './pages/SearchBuses'
import './App.css'
import Register from './pages/Register'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search-buses" element={<SearchBuses />} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
