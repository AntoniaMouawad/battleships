
import Header from "./components/Header";
import Cell from "./components/Cell";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Cell status={'miss'} onClick= {() => console.log('Clicked!')}/>
    </div>
  );
}

export default App;
