import React from 'react';
import './App.css';
import useWordGame from './hooks/useWordGame'


function App() {

  const { textBoxRef, getTypedWords, words, timeRemaining, startGame, isTimeRunning, wordCount } = useWordGame()

  return (
    <div className="App">
      <h1>How fast do you type?</h1>

      <textarea
        ref={textBoxRef}
        disabled={!isTimeRunning}
        onChange={getTypedWords}
        value={words}
      />

      <h4>Time Remaining: {timeRemaining}</h4>

      <button
        onClick={() => startGame()}
        disabled={isTimeRunning}
      >
        Start
      </button>

      <h1>Word Count: {wordCount}</h1>

    </div>
  );
}

export default App;
