import { useDispatch, useSelector } from 'react-redux';
import { decrement, increament } from './actions';
import './App.css';

function App() {

    const dispatch = useDispatch();

    const data = useSelector(state => state.performOperation)

    
  return (
    <div className="App">
          Redux-tut <br></br><br></br>
          <div className='container'>
              <button className='increament' onClick={() => dispatch(increament(data[0]))}>+</button>
              <div>{data[0]}</div>
              <button className='decrement' onClick={()=>dispatch(decrement(data[0]))}>-</button>
          </div>
          <div>{data[1]}</div>
    </div>
  );
}

export default App;
