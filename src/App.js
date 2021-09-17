import './App.css';
import Movies from './components/Movies';
import AddMovie from './components/AddMovie';


function App() {
  return (
   <div className="App">
     <h1 className="title"> Movie Rating App</h1>
     <AddMovie />,
     <Movies />
     
        
    </div>
  
  );
}


export default App;
