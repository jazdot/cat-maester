import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CatMaster from './pages/CatMaster';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<CatMaster />} />
      </Routes>
    </Router>
  );
}
