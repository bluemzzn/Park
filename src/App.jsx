import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx"
import Rent from "./pages/Rent.jsx"
import Contact from "./pages/Contact.jsx"
import Login from "./pages/Login.jsx"
import NoPages from "./pages/NoPages.jsx"


function App() {
  

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rent" element={<Rent />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPages />} />
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
