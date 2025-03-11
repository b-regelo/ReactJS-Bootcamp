import { atom, useAtom } from 'jotai';
import './Counter.css';

const counterAtom = atom(0);

export default function Counter() {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <div className="counter-container">
      <div className="counter-value">Counter: {count}</div>
      <div className="button-container">
        <button className="button increment" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="button decrement" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button className="button reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}
