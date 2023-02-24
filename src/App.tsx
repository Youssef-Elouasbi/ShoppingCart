import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'

import NavBar from './components/Navbar'
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import About from './pages/About'
import Cancel from './pages/Cancel'
import Home from './pages/Home'
import Store from './pages/Store'
import Success from './pages/Success'
function App() {
  const { Dark } = useDarkMode()
  return (
    <ShoppingCartProvider>
      <DarkModeProvider>
        <NavBar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            {/* <Route path="/About" element={<About />} /> */}
          </Routes>
        </Container>
      </DarkModeProvider>
    </ShoppingCartProvider>
  )
}

export default App
