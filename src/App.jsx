import { useState } from 'react';
import './App.css';
import Course from './Components/Course/Course';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-8 mr-32 ">Course Registration</h1>
      
       <div className=' flex'>
       <Course />
      
       </div>
      
       
      </div>
    
  );
}

export default App;
