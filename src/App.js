import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const STARTING_TIME = 5

  const [words, setWords] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function getTypedWords(e) {
    const { value } = e.target
    setWords(value)
  }

  function calculateWordCount(text) {
    const wordsArray = text.trim().split(' ')
    const filteredArray = wordsArray.filter(word => word !== '').length

    return filteredArray
  }

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setWords('')
  }

  function endGame() {
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(words))
  }
  useEffect(() => {

    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    }

    // can also just do "else"
    if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

  return (
    <div className="App">
      <h1>How fast do you type?</h1>

      <textarea
        onChange={getTypedWords}
        value={words}
      />

      <h4>Time Remaining: {timeRemaining}</h4>

      <button 
        onClick={() => startGame()}
        disabled={isTimeRunning}
      >Start
      </button>

      <h1>Word Count: {wordCount}</h1>

    </div>
  );
}

export default App;
