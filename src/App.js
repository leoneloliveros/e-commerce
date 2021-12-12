import './App.css';
import NavMenu from './components/NavMenu/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/landing/Landing';

function App() {
  return (
    <div className="App">
      <NavMenu></NavMenu>
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
