import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import SearchBuses from './SearchBuses'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search-buses" element={<SearchBuses />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
