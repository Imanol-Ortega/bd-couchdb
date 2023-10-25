import { Routes,Route } from "react-router-dom"
import { PersonasContextProvider } from "./context/ContextoProvider"
import PersonasViews from './views/PersonasViews'
import NavBar from './componentes/Navbar'
import PersonasForm from './forms/PersonasForm'

function App() {

  return (
    <div className='bg-zinc-800 text-blue-50 h-screen'>
      <NavBar/>
      <div className="container mx-auto py-4 px-10">
        <PersonasContextProvider>
          <Routes>
            <Route path="/" element={<PersonasViews/>}></Route>
            <Route path="/new" element={<PersonasForm/>}></Route>
            <Route path="/edit/:id" element={<PersonasForm/>}></Route>
          </Routes>
        </PersonasContextProvider>
      </div>
    </div>
  )
}

export default App
