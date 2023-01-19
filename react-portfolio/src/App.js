import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index';
import Home from './components/Home/index';
import About from './components/About/index';
import Contact from './components/Contact/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
