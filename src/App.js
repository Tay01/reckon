import './App.css';
import {React, useState, useEffect} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  //Increment Function
  const increment = () => {
    setCounter(count => count + 1);
  };

  //Auto-Increments the Counter by 1, every 2 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(count => count + 1)
    }, 2000)
    return () => 
     clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button
          className="Button"
          onClick={increment}>
            Increment
        </button>
      </header>
    </div>
  );
}

export default App;
