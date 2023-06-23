import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Teams from './pages/Teams'
import Players from './pages/Players'
import AddTeam from './pages/AddTeam'
import Header from './components/Header'
import TeamDetails from './pages/TeamDetails'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/teams" element={<Teams />} />
      <Route path="/players" element={<Players />} />
      <Route path="/teams/add" element={<AddTeam />} />
      <Route path="/teams/details/:id" element={<TeamDetails />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    </>
  )
}

export default App