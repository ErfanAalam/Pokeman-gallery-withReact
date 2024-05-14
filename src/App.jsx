import "./App.css";
import Pokemancards from "./Pokemancards";
import Card from "./Card";


function App() {
  return (
    <>
      {/* <Pokemancards  num="2"/> */}
     <div className="heading ">Pokemon Gallery</div>
     <div className="flex flex-col justify-evenly items-center">
     <Card />
     </div>
    </>
  );
}
export default App;
