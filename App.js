import logo from './components/logo2.png';
import './App.css';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={logo} className='lstyle'></img>
      
    </div>
    
  );
}
export default App;
