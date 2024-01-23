import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import styles from './styles/App.module.css'
import { MainPage } from './components/MainPage'
import MovieDetail from './components/MovieDetail'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <>
    <Container>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
      </Routes>
    </Container>
    </>
  )
}

export default App
