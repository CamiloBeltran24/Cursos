import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserListWithLoading from './components/UserListWithLogin'
import SearchPosts from './components/SearchPosts/SearchPosts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UserListWithLoading></UserListWithLoading> */}
      <SearchPosts></SearchPosts>
    </>
  )
}

export default App
