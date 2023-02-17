import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Store from './pages/Store'
function App() {
  return (
    <>
      <NavBar />
      <Container className='mb-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
