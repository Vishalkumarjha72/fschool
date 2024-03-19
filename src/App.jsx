

import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Courses from './components/Courses'
import Job from './components/Job'
import People from './components/People'
import Statistics from './components/Statistics'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import About from './components/About'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Courses/>}> </Route>
        <Route path='/job' element={<Job/>}> </Route>
        <Route path='/people' element={<People/>}> </Route>
        <Route path='/statistics' element={<Statistics/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path='/blog' element={<Blog/>}> </Route>
      </Routes>
      <Footer/>
        
    </>
  )
}

export default App
