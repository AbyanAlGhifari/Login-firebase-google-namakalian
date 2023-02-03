import './App.css'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import config from './config.jsx'
import { useNavigate } from 'react-router-dom'

function App() {
  const Navigate = useNavigate()
  const Loginnamakalian = async () => {
    const data = await signInWithPopup(config, new GoogleAuthProvider())
    Navigate(`/Home/${data.user.email}`)
  }
  return (
    <div>
      <h1><marquee>Prototype Login Google</marquee></h1>
      <button onClick={Loginnamakalian}>Login</button>
    </div>
  )
  
}


export default App
