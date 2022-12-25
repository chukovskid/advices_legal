
import './App.css';
import LandingPage from '../pages/LandingPage';
import ServicePage from '../pages/ServicePage';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <div className='container-main'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:serviceId" element={<ServicePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
