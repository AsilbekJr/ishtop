import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import Register from "./pages/auth/Register";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/ustalar" element={<Ustalar />} />
            <Route path="/xizmatlar" element={<Services />} />
            <Route path="/aloqa" element={<Contacts />} />
            <Route path="/register" element={<Register />} />
            <Route path="/usta/:id" element={<UstaProfil />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

// Sahifalar

function Ustalar() {
  return <h2 className="text-xl">Barcha ustalar ro‘yxati</h2>;
}

function Services() {
  return <h2 className="text-xl">Xizmatlar</h2>;
}

function Contacts() {
  return <h2 className="text-xl">Aloqa</h2>;
}

function UstaProfil() {
  return <h2 className="text-xl">Usta profili sahifasi</h2>;
}

export default App;
