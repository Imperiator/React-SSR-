
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Test from './pages/ssr-test';

function App() {
  return (
    <Routes>
      <Route path="/" element={<p>
        Home
      </p>} />
      <Route path="/test" element={<Test />} />
   </Routes>
  );
}

export default App;
