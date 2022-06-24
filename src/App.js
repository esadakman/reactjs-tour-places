import "./App.css";
import Data from "./helper/Data";
// ! Style (traditional)
import Card from "./components/cards/Card";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
// ! SASS style
import "./sass/App.scss";

function App() {
  // console.log(Data);
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card Data={Data} />
    </div>
  );
}

export default App;
