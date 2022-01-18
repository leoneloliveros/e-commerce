import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage/LandingPage';
import NavMenu from './components/NavMenu/NavMenu';
import { Navigate, Route, Routes } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage/DefaultPage';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path="/" element= {<LandingPage />}>
          <Route path="/category/:category" element= {<LandingPage />}></Route>
        </Route>
        <Route path="/not-found" element= {<DefaultPage />}></Route>
        <Route path="*" element= {<Navigate to="/not-found" />}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
