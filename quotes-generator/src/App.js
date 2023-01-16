import './App.css';
import { useState, useEffect } from 'react';


function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {

  //guarda el array con TODOS los quotes
  const [quotes, setQuotes] = useState([]);
  //guarda un quote en particular
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((json) => {
        //guarda todo en el array
        setQuotes(json);
        //selecciona uno para el estado
        setQuote(json[0]);
      })
  }, [])

  function getNewQuote() {
    setQuote(getRandomQuote(quotes))
  }


  return (
    <main>
      <h1>Project 3: Quote Generator</h1>
      <section>
        <button onClick={getNewQuote}>New Quote</button>
        <h3>
          {quote?.text}
        </h3>
        <i>- {quote?.author} -</i>
      </section>
    </main>
  );
}

export default App;
