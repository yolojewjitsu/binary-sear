import { useEffect, useState } from 'react';
import './App.css';
import Tiles from './components/Tiles';
import { generateNumbers, getTargetAnswer } from './helpers/generateNumbers';

function App(props) {
  const [state, setState] = useState({
    numbers: generateNumbers(),
    target: getTargetAnswer(),
  });
  const [correct, setCorrect] = useState(false);
  const [counter, setCounter] = useState(-1);

  useEffect(() => {
    setCounter((prev) => prev + 1);
  }, [state, correct]);
  
  return (
    <div className="App">
      <h1>Binary Search</h1>
      <h2>Attempt: {counter}</h2>
      <div id='main'>
        <Tiles
          numbers={state.numbers}
          target={state.target}
          correct={correct}
          setCorrect={setCorrect}
          setState={setState}
        />
      </div>
      {correct && (
        <input
          type='button'
          name='btn'
          value='Play again'
          onClick={() => window.location.reload()}
        />  
      )}
    </div>
  );
}

export default App;
