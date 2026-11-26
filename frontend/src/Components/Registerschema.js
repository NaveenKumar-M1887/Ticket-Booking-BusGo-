import {z} from "zod";
export const Registerschema = z.object({
  username:z.string().min(3, 'Name must contain 3 letters'),
  email:z.string().email('Enter a valid email'),
  password:z.string().min(8, 'Password must contain 8 characters')
})