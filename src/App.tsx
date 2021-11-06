import { useState } from 'react';
import { Modal } from './components/Modal';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="App">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>

      <button onClick={() => setIsOpen(true)}>Abrir modal</button>
    </div>
  );
}

export default App;
