import './App.css';

import InputBox from './component/InputBox';
import HideShow from './component/HideShow';
import HandlingForm from './component/HandlingForm';

function App() {
  return (
    <div className="App">
      {/* Get input box value */}
      <InputBox />
      
      {/* Hide and show element */}
      <HideShow />

      {/* Handling Form */}
      <HandlingForm />
      
    </div>
  );
}

export default App;