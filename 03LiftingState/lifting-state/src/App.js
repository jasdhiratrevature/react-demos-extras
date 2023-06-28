import { useState } from 'react';
import './App.css';
import ListCount from './ListCount';
import AddToList from './AddToList';
import ListShow from './ListShow';
function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <h1>Lifting State Up Demo</h1>
      <ListCount list={list}/>
      <ListShow list={list}/>
      <AddToList setList={setList}/>
      
    </div>
  );
}

export default App;
