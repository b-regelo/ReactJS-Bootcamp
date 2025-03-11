import { create } from 'zustand'; 
import './Counter.css';

interface StoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

const Counter: React.FC = () => {
  const { count, increment, decrement, reset } = useStore();

  return (
    <div className="counter-container">
      <div className="counter-value">Counter: {count}</div>
      <div className="button-container">
        <button className="button increment" onClick={increment}>
          Increment
        </button>
        <button className="button decrement" onClick={decrement}>
          Decrement
        </button>
        <button className="button reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;