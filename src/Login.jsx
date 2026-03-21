import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const Login = () => {

    const nav = useNavigate();
    const email = useRef()
    const password = useRef()
    const {login: setUserLogin} = useContext(AuthContext)

    const login = (e) => {
        e.preventDefault();
        const data = {
            email: email.current.value,
            password: password.current.value
        }

        axios.post('http://localhost:5000/login', data).then((response) => {
            console.log(response.status);
            if (response.data.status === 'true') {
                const firstname = response.data.data.firstname
                const token = response.data.token

                setUserLogin(firstname)
                localStorage.setItem("token", token)
                alert('Login successful!')
                nav('/')
            }
        })
        .catch((error)=>{
            if(error.response){
                alert(error.response.data.error)
            }
            else{
                alert("Server Error!")
            }
        })
    }

    return (
        <>
            <div className="login-main">
                <div className="container">

                    <span className="login-heading">Customer Login</span>

                    <div className="login-inner">

                        <div className="login-form">

                            <form onSubmit={login}>
                                <span>Registered Customers</span>
                                <p>If you have an account, sign in with your email address.</p>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" ref={email} required />

                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" ref={password} required />

                                <button type="submit">sign in</button><br />

                                <span>New Customers</span>
                                <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>

                                <button type="button" onClick={() => { nav('/signin') }}>create an account</button><br />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login;