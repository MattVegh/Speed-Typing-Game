import { useState, useEffect, useRef } from 'react'

function useWordGame() {
    const STARTING_TIME = 5

    const [words, setWords] = useState('')
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)

    const textBoxRef = useRef(null)

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
        console.log(textBoxRef)
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
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

    return { textBoxRef, isTimeRunning, getTypedWords, words, timeRemaining, startGame, wordCount }

}

export default useWordGame
