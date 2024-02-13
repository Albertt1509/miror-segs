import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './components/index'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
    </Routes>
  )
}

export default App
