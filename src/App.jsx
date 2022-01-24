import "./style/App.css"
import Wrapper from "./components/Wrapper"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar/>
      </Wrapper>
    </div>
  );
}

export default App;
