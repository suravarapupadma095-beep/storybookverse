export default function Login() {
  return (
    <div style={{padding:'40px'}}>
      <h1>Login</h1>

      <input placeholder="Email" style={{display:'block',marginBottom:'10px'}} />
      <input placeholder="Password" type="password" style={{display:'block',marginBottom:'10px'}} />

      <button>Login</button>
    </div>
  )
}