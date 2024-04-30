import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navbar from './components/Navbar.jsx';
import Vintage from './pages/Vintage.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/vintage" element={<Vintage />} />
      </Routes>
    </Router>
  );
}

export default App;