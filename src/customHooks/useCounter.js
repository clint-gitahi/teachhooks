import { useState } from 'react';

function useCounter(initalCount = 0, value) {
    const [count, setCount] = useState(initalCount)
    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(initalCount)
    }

    return [count, increment, decrement, reset]
}

export default useCounter
