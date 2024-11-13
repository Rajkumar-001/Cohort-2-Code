import { BrowserRouter,Routes,Route ,useNavigate} from 'react-router-dom'



import './App.css'
import Dashboard from './components/dashboard'
import Landing from './components/Landing'

function App() {

  return (
    <div>
      
      
      <BrowserRouter>
      <AppBar></AppBar>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Landing/>} />
    </Routes>
    </BrowserRouter>

    </div>
    
  )
}

function AppBar(){
  const navigate = useNavigate();
  return(
    <div>
        <button onClick={()=>{
          navigate("/");
        }}>Landing Page</button>
        <button onClick={function (){
          navigate("/dashboard");
        }}>Dashboard</button>
      </div>
  )
}

export default App
