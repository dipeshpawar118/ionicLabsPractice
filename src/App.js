import logo from './logo.svg';
import './App.css';
import Welcome from './pages/pageOne.jsx'
import PageTwo from './pages/pageTwo.jsx'

const Hello = <h1>Hello React Const</h1>
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        {Hello}
        <Welcome></Welcome>
        <PageTwo></PageTwo>
      </header>
    </div>
  );
}

export default App;
