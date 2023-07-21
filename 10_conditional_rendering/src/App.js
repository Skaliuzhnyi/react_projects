import './App.css';
import PetInfo from './components/PetInfo';
import AgeInfo from './components/AgeInfo';

function App() {
  return (
    <div className="App">
      <PetInfo
        animal="cat"
        age="88"
        hasPet={false}
      />

      <PetInfo
        animal="tiger"
        age={99}
        hasPet
      />

      <AgeInfo 
        name="ANDREY"
        minAge={18}
        age={16}
      />
    </div>
  );
}

export default App;
