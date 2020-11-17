import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation';
import MainBody from './components/Body';
function App() {
  return (
    <div className="App">
      <Navigation />
      <MainBody />
    </div>
  );
}

export default App;
