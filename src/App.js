import { useEffect, useState } from 'react'
import getFromNumberApi from './api'

function App() {
  const [counter, setCounter] = useState(0)
  const [text, setText] = useState()

  useEffect(() => {
    setText('Loading...')
    getFromNumberApi(counter)
      .then((res) => setText(res))
      .catch((err) => setText(err))
  }, [counter])

  return (
    <main>
      <section>
        <button onClick={() => setCounter((prev) => prev - 1)}>decrement</button>
        <div>
          Counter:
          <h1>{counter}</h1>
        </div>

        <button onClick={() => setCounter((prev) => prev + 1)}>increment</button>
      </section>

      <section>{text}</section>
    </main>
  )
}

export default App

// TDD: Test Driven Development
// Component tests
// Elements
// Interact
// Wait for rerenders
// Side effects
// Debugging
// React Testing Library
// Jest
// JSDOM
