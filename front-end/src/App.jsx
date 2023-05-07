import { useState } from 'react'
import Card from '../components/card/Card'
import Display from '../components/display/Display'
import Search_bar from '../components/search_bar/Search_bar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Search_bar/>
      <Display/>
    </>
  )
}

export default App
