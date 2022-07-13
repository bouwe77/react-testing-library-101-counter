import { useEffect, useState } from 'react'
import getFromNumberApi from './api'

function App() {
  const [counter, setCounter] = useState(0)
  const [text, setText] = useState('Loading...')

  useEffect(() => {
    setText('Loading...')
    getFromNumberApi(counter)
      .then((res) => setText(res))
      .catch((err) => setText(err))
  }, [counter])

  return (
    <main>
      <section>
        <button onClick={() => setCounter((prev) => prev - 1)}>Decrement</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      </section>

      <section>{text}</section>
    </main>
  )
}

export default App
