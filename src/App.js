import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [words, setWords] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(5)

  function getTypedWords(e) {
    const { value } = e.target
    setWords(value)
  }

  function wordCount(text) {
    const wordsArray = text.trim().split(' ')
    const filteredArray = wordsArray.filter(word => word !== '').length

    console.log(filteredArray)

    return filteredArray
  }

  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    }
  }, [timeRemaining])


  return (
    <div className="App">
      <h1>How fast do you type?</h1>

      <textarea
        onChange={getTypedWords}
        value={words}
      />

      <h4>Time Remaining: {timeRemaining}</h4>

      <button onClick={() => wordCount(words)}>Start</button>

      <h1>Word Count: p14c3h01d3r</h1>

    </div>
  );
}

export default App;
