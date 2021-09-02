import './App.css';
import Movies from './DirectorContainer/Movies';
import DirectorContainer from './DirectorContainer/Directors';


function App() {
  return (
   <div className="App">
     <h1> Movie Rating App</h1>
     <Movies />
     <DirectorContainer />
        
    </div>
  
  );
}


export default App;
