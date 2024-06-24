import Home from "./Pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./Pages/About";
import Protected from "./Pages/Protected";
import Portfolio from "./Pages/Portfolio";
// import Blog from ''
import Contact from "./Pages/Contact";;
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<Protected><About></About></Protected>}></Route>
          <Route path="/portfolio" element={<Protected><Portfolio></Portfolio></Protected>}></Route>
          <Route path="/contact" element={<Protected><Contact></Contact></Protected>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
