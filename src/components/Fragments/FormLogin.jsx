import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState('')
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem('email', e.target.email.value)
    // localStorage.setItem('password', e.target.password.value)
    // window.location.href = '/products';
    /* username & pass dari fakestore api 
    username: johnd pass: m38rmF$ */
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    }
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res);
        window.location.href = '/products';
      } else {
        setLoginFailed(res.response.data);
      }
    })
  };
  const usernameRef = useRef(null);

  //saat pertama page dibuka langsung focus ke input email
  useEffect(() => {
    usernameRef.current.focus();
  }, [])

  return (
    <form onSubmit={handleLogin}>
      {loginFailed && <p className="text-red-500">* {loginFailed}</p> }
      
      <InputForm
        label="Username"
        placeholder="Enter your username..."
        name="username"
        type="text"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password..."
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
