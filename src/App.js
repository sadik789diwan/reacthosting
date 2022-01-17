import logo from './logo.svg';
import FirstComponent from './Components/learning-examples/FirstComponents'
import Counter from './Components/counter/Counter'

import './App.css';
import { Component } from 'react';


function App() {
  return (
    <div className="App">
       My Hello World
       <FirstComponent></FirstComponent>
       <Counter></Counter>
    </div>
  );
}


class LeaningComponents extends Component {
   render () {
     return (
       <div className='LeaningComponents'>
         My Hello World
       </div>
     );
   }
}

export default App;
