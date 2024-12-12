import { useState } from 'react'
import AboutMe from './components/LogIn/Login';
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Pills from './components/Pills/Pills';
import Footer from './components/Footer/Footer';
import Login from './components/LogIn/Login';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login/>
    </>
  )
}

export default App
