import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [words, setWords] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [isTimeRunning, setisTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function getTypedWords(e) {
    const { value } = e.target
    setWords(value)
  }

  function calculateWordCount(text) {
    const wordsArray = text.trim().split(' ')
    const filteredArray = wordsArray.filter(word => word !== '').length

    console.log(filteredArray)

    return filteredArray
  }

  function startGame() {
    setisTimeRunning(true)
  }

  useEffect(() => {
    
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    }
    
    // can also just do "else"
    if (!isTimeRunning && timeRemaining === 0) {
      setisTimeRunning(false)
    }
  }, [timeRemaining, isTimeRunning])

console.log(isTimeRunning)
  return (
    <div className="App">
      <h1>How fast do you type?</h1>

      <textarea
        onChange={getTypedWords}
        value={words}
      />

      <h4>Time Remaining: {timeRemaining}</h4>

      <button onClick={() => startGame()}>Start</button>

      <h1>Word Count: {wordCount}</h1>

    </div>
  );
}

export default App;
