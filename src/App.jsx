import { createContext, useContext, useState } from 'react';
import './App.css';
export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Count />
    </CountContext.Provider>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext);

  return <div>Count: {count}</div>;
}

function Button() {

  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
