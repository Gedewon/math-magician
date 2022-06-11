import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/page/Home';
import Quote from './components/page/Quote';

const App = () => {
  const cellElements = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator cellElements={cellElements} />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
};

export default App;
