import pic from "./img/SpaceX-Logo.png";
import "./App.css";
import { DragonDisplay } from "./components/dragons/component";
import { RocketDisplay } from "./components/rockets/component";

function App() {
  return (
    <>
      <header>
        <img className="logoSpaceX" src={pic} alt="logoSpaceX" />
      </header>
      <div className="row">
        <section className="seccionDragons">
          <DragonDisplay />  
        </section>
        <section className="seccionRockets">
          <RocketDisplay /> 
        </section>
      </div>
    </>
  );
}

export default App;
