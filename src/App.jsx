import './App.css'
import Contact from './components/contact/contact';
import Login from './components/Login/Login'
import SignUp from './components/Signup/signup';
import Translator from './pages/translator'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Translator/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
