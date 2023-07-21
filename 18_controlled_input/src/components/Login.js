import { useState } from 'react'

function Login() {
  const [data, setData] = useState({username:'', password:''});

  function hendelFormSubmit(event) {
    event.preventDefault();

    alert(JSON.stringify(data));
  }

  function handlerInputChange(e, name) {
    setData({...data, [name]: e.target.value})
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={hendelFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handlerInputChange(e, 'username')}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handlerInputChange(e, 'password')}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login