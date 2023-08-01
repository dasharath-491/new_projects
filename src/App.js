import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from './components/SignUp';
import Private from './components/Private';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Private />}>
            <Route path="/" element={<h1>Product Listing Conponent</h1>} />
            <Route path="/add" element={<h1>Add Product Listing Conponent</h1>} />
            <Route path="/update" element={<h1>Update Product Listing Conponent</h1>} />
            <Route path="/logout" element={<h1>Logout</h1>} />
            <Route path="/profile" element={<h1>Profile</h1>} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
