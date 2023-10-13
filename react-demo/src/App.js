import './App.css';
import Counter from './components/Counter.js';
import Title from './components/Title.js';

function App() {
  return (
    <div className="App">
      <Title/>
      <Counter color='purple'/>
    </div>
  );
}

export default App;
