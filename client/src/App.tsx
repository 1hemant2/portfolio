import Home from "./Pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./Pages/About";
import Protected from "./Pages/Protected";
import Portfolio from "./Pages/Portfolio";
// import Blog from ''
import Contact from "./Pages/Contact"; import Blog from "./Pages/Blog";
;
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<Protected><About></About></Protected>}></Route>
          <Route path="/portfolio" element={<Protected><Portfolio></Portfolio></Protected>}></Route>
          <Route path="/contact" element={<Protected><Contact></Contact></Protected>}></Route>
          <Route path="/blog" element={<Protected><Blog></Blog></Protected>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
