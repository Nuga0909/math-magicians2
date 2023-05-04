import './Calculator.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Nav';
import HomePage from './components/Home';
import Quote from './components/quote';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
