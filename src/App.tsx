import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import CatMaster from './pages/CatMaster';

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Router>
        <Routes>
          <Route path="*" element={<CatMaster />} />
        </Routes>
      </Router>
    </LazyMotion>
  );
}
