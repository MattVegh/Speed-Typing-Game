import React, { useState } from 'react';
import './App.css';

function App() {
  const [words, setWords] = useState('')

  function getTypedWords(e) {
    const { value } = e.target
    setWords(value)
  }

  function wordCount(text) {
    const wordsArray = text.split(' ').length
    console.log(wordsArray)
    return wordsArray
  }


  return (
    <div className="App">
      <h1>How fast do you type?</h1>

      <textarea
        onChange={getTypedWords}
        value={words}
      />

      <h4>time remaining placeholder</h4>

      <button onClick={() => wordCount(words)}>Start</button>

      <h1>Word Count: p14c3h01d3r</h1>

    </div>
  );
}

export default App;
