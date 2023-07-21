import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo
        animal="cat"
        age={7}
        children="Andrey"
        chiAge="6"
      />

      <PetInfo
        animal="tiger"
        age="4"
        children="Andrey"
        chiAge="6"
      />

      <PetInfo
        animal="sister"
        age="34"
        children="Ivan"
        chiAge="56"
      />
    </div>
  );
}

export default App;
