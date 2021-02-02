import './App.css';
import Section from './Section';
import data from './movie.json';



function App() {
  return (
    <div className="App">
      {data.map((elem,index) => {
        console.log(elem);
          return(
              <Section
                key={index}
                title={elem.categorie}
              />
              )
      })}
    </div>
  );
}

export default App;