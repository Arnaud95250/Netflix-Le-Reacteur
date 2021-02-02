import './App.css';
import Section from './Section';
import data from './movie.json';
import Picture from './Picture';





function App() {
  return (
    <div className="App">
        <header className="container_header">
            <Picture />
            <div className="button">
              <input type="button" value="Accueil"/>
              <input type="button" value="Films"/>
              <input type="button" value="Série"/>
            </div>
        </header>

        <main className="container_main">
          {data.map((elem,index) => {
            console.log(elem);
              return(
                  <Section
                      key={index}
                      title={elem.category}
                      images={elem.images}
                  />
                  )
              })}
        </main>
    </div>
  );
}

export default App;

