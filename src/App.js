import Calculator from './components/Calculator';

const App= ()=>{
  const cellElements = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  
  return (<Calculator cellElements={cellElements} />); 
}

export default App;