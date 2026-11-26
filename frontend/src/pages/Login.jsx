import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css'
function Login() {
  const [formdata,setFormdata] = useState({username:'',email: '',password: ''})
  const navigate = useNavigate()
  function handleChange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Login Successfully.")
    navigate('/search-buses', { state: formdata })
    console.log('username :',formdata.username)
    console.log('Email :',formdata.email)
   console.log('password :',formdata.password)
  }
  return (
    <div>
      <h1>BusGo Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" required placeholder="Enter username" value={formdata.username} onChange={handleChange}/>
        <input type="email" name="email" required  placeholder="Enter Email" value={formdata.email} onChange={handleChange}    />
        <input type="password" name="password" required placeholder="Enter Password" value={formdata.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      <p>Welcome to BusGo!</p>
    </div>
  )
}
export default Login