import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'

import NavBar from './components/Navbar'
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import About from './pages/About'
import Home from './pages/Home'
import Store from './pages/Store'
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
            {/* <Route path="/About" element={<About />} /> */}
          </Routes>
        </Container>
      </DarkModeProvider>
    </ShoppingCartProvider>
  )
}

export default App
