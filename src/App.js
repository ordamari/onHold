import { useEffect, useState } from "react";
import { useOnHold } from "./hooks/useOnHold";
import './app.css'

function App() {

  const [number, setNumber] = useState(100);


  const decrease = () => {
    setNumber(prev => prev - 1)
  }

  const increase = () => {
    setNumber(prev => prev + 1)
  }

  const incHandlers = useOnHold(increase);
  const decHandlers = useOnHold(decrease);



  return (
    <div className="App">
      <div className="number-select-container">
        <div className="number-select">
          <button
            className="dec"
            {...decHandlers}
            onClick={decrease}
          >
            -
          </button>
          <div>{number}</div>
          <button
            className="inc"
            {...incHandlers}
            onClick={increase}
          >
            +
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
