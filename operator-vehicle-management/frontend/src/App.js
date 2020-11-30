import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routes from './components/Routes'

function App() {
  return (
    <div>
      <div className="App-navbar">
      <Navbar/>
    </div>
    <div >
    <Routes/>
</div>
    </div>
  );
}

export default App;
