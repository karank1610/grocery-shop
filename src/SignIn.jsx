import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SingIn = () => {
    const firstname = useRef()
    const lastname = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()

    const navigate = useNavigate()

    const signin = (e) => {
        e.preventDefault();

        const pass = password.current.value;
        const confirmPass = confirmPassword.current.value;

        if (pass !== confirmPass) {
            alert('Password do not match!');
            return;
        }

        const data = {
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            email: email.current.value,
            password: pass,
        }

        axios.post('http://localhost:5000/', data).then((response) => {
            console.log(response.data)
            if (response.data.status === 'true'){
                alert('Account created successfully!')
                navigate('/login')
            }
        })
    }

    return (
        <>
            <div className="signin-main">
                <div className="container">

                    <span className="signin-heading">Create New Customer Account</span>

                    <div className="signin-inner">

                        <div className="signin-form">

                            <form onSubmit={signin}>
                                <span>Personal Information</span>
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" id="firstname" ref={firstname} required />

                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" id="lastname" ref={lastname} required />

                                <div className="newsletter">
                                    <input type="checkbox" name="newsletter" id="newsletter" />
                                    <label htmlFor="newsletter">Sign Up for Newsletter</label>
                                </div>

                                <span>Sign-in Information</span>

                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" ref={email} required />

                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" ref={password} required />

                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input type="password" id="confirm-password" ref={confirmPassword} required />

                                <button type="submit">create an account</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SingIn;