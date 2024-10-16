import './App.css'
import Contact from './components/contact/contact';
import Login from './components/auth/Login'
import Register from './components/auth/register'
import PasswordReset from './components/auth/PasswordRest';
import Translator from './pages/translator'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from './pages/AdminPages/Dashboard';
import Users from './pages/AdminPages/Users';
import Translation from './pages/AdminPages/Translation';
import Dictionary from './pages/AdminPages/Dictionary';
import Settings from './pages/AdminPages/Settings';
import Profile from './pages/Profile';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Translator/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/password-reset" element={<PasswordReset/>} />
          
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/translations" element={<Translation />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
