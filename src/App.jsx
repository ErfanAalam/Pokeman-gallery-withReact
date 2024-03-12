import "./App.css";
import Pokemancards from "./Pokemancards";


function App() {


  return (
    <>
      <h2 className="text-center text-4xl font-bold py-20 heading">Pokeman's Kingdom</h2>
      <div className="flex flex-wrap px-12">
        <Pokemancards num={1} />
        <Pokemancards num={2} />
        <Pokemancards num={3} />
        <Pokemancards num={4} />
        <Pokemancards num={5} />
        <Pokemancards num={6} />
        <Pokemancards num={7} />
        <Pokemancards num={8} />
        <Pokemancards num={9} />
        <Pokemancards num={10} />
        <Pokemancards num={11} />
        <Pokemancards num={12} />
        <Pokemancards num={13} />
        <Pokemancards num={14} />
        <Pokemancards num={15} />
        <Pokemancards num={16} />
        <Pokemancards num={17} />
        <Pokemancards num={18} />
        <Pokemancards num={19} />
        <Pokemancards num={20} />
      </div>

      
    </>
  );
}

export default App;
