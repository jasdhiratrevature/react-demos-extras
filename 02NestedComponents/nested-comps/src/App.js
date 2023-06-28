import Card from './Card';
import './App.css';
import Sidebar from './Sidebar';
import MenuItem from './MenuItem';

function App() {
  return (
    <div className="App">
     {/* <Card title="Hello " body="This is Hello" /> */}
     <Sidebar>
      <MenuItem title="item-1"/>
      <MenuItem title="item-2"/>
      <MenuItem title="item-3"/>
    </Sidebar>
    </div>
  );
}

export default App;
