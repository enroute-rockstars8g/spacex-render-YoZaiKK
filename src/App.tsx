import pic from "./img/SpaceX-Logo.png";
import "./App.css";
import { DragonDisplay } from "./components/dragons/component";
import { RocketDisplay } from "./components/rockets/component";

function App() {
  return (
    <>
      <div className="centered">
        <header className="masthead clear">
          <div className="centered">
            <div className="site-branding">
              <img
                className="logoSpaceX site-title"
                src={pic}
                alt="logoSpaceX"
              />
            </div>
          </div>
        </header>
        <main className="main-area">
          <div className="centered">
            <section>
              <div className="row">
                <section className="seccionDragons">
                  <DragonDisplay />
                </section>
                <section className="seccionRockets">
                  <RocketDisplay />
                </section>
              </div>
            </section>
          </div>
        </main>
        <footer>
        <div className="centered">
            <div className="site-branding">
              <img
                className="logoSpaceX"
                src={pic}
                alt="logoSpaceX"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
