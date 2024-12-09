
import Header from "./components/Header";
import Cell from "./components/Cell";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Cell status={'hit'} onClick= {() => console.log('Clicked!')}/>
    </div>
  );
}

export default App;
