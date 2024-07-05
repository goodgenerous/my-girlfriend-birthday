import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import '../node_modules/swiper/swiper.css';
import '../node_modules/swiper/swiper-bundle.css';
import '../node_modules/swiper/swiper.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import TimelineComponent from './components/timelineComponent';
import { GlobalProvider } from './context/GlobalContext';

const App = () => {
  return (
    <>
      <Router>
        <GlobalProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Navigate to="/login" />} />
            <Route path='/home' element={<Home />} />
            <Route path="/timeline" element={<TimelineComponent />} />
          </Routes>
        </GlobalProvider>
      </Router>
    </>
  );
}

export default App;
