import {useState} from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('f1-blog-ashrit-back.vercel.app/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }
  }

//   const username = useRef();
//   const password = useRef();
//   const navigate= useNavigate();
//   const submitHandler= 
  
//       ()=>async (e)=>{
//           e.preventDefault();

//           const data={   
                // username: username.current?.value,
                // password: password.current?.value
//           };
//           try
//             {
//                 const response = await api.post("http://localhost:4000/register",{email: data.email, password: data.password})
//                 .then((response)=>{
//                     if (response.status === 200) {
//                         alert('registration successful');
//                       } else {
//                         alert('registration failed');
//                       }
//                 }
//               );               

//                 console.log(response.data); 
                
//             }
//             catch(err)
//             {
//                 console.error(err);
                
//             }  
  return (
    <div className="regpage">    
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
      <button>Register</button>
    </form>
    </div>
  );


  
}