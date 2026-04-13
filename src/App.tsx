/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import WellServices from './pages/WellServices';
import WaterFiltration from './pages/WaterFiltration';
import PumpSystems from './pages/PumpSystems';
import Emergency from './pages/Emergency';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services/well-services" element={<WellServices />} />
          <Route path="services/water-filtration" element={<WaterFiltration />} />
          <Route path="services/pump-systems" element={<PumpSystems />} />
          <Route path="emergency" element={<Emergency />} />
        </Route>
      </Routes>
    </Router>
  );
}
