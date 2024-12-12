import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateCards from "./pages/CreateCards";
import ReadCards from "./pages/ReadCards";
import Search from "./pages/Search";
import Admin from "./pages/Admin";
function App(){




  return(
    <Router>
    <div>

      <nav>
      <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/Search">SearchCards</Link>
      </li>

      <li>
      <Link to="/CreateCards">CreateCards</Link>
      </li>

      </ul>
      </nav>




      <Routes>

      <Route path="/Admin" element={<Admin />} />
      <Route path="/CreateCards" element={<CreateCards />} />
      <Route path="/" element={<Home />} />
      <Route path="/ReadCards/:id" element={<ReadCards />} />
      <Route path="/Search" element={<Search />} />

      </Routes>




    </div>
    </Router>
  )
}


export default App
