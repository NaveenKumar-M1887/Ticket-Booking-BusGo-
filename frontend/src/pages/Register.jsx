import { useNavigate } from "react-router-dom";
import { Registerschema } from "../Components/Registerschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function Register() {
  const navigate=useNavigate()
  const {register,handleSubmit,formState: {errors} } = useForm({
    resolver:zodResolver(Registerschema)
  })
  function onSubmit(data) {
    console.log(data)
    alert('Registration details validated!')
    navigate('/')
  }
  return (
    <div>
      <h1>BusGo Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text"  name= "Enter your name" required placeholder="Enter your name"  {...register('username')} />
        <p>{errors.username?.message}</p>
        <input type="email" name= "Enter your email"  required placeholder="Enter your email" {...register('email')}/>
        <p>{errors.email?.message}</p>
        <input type="password" name= "Enter your password" required placeholder="Enter your password"{...register('password')}/>
        <p>{errors.password?.message}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Register