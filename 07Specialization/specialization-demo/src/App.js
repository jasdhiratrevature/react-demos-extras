import logo from './logo.svg';
import './App.css';
import Dialog from './Dialog';
import GoodMorning from './GoodMorning';

function App() {
  return (
    <div className="App">
      <Dialog title="My Title" message="Hi There"/>
      <GoodMorning/>
    </div>
  );
}

export default App;
