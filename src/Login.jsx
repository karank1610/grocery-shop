import { useNavigate } from "react-router-dom";

const Login = () => {

    const nav = useNavigate();

    return (
        <>
            <div className="login-main">
                <div className="container">

                    <span className="login-heading">Customer Login</span>

                    <div className="login-inner">

                        <div className="login-form">

                            <form>
                                <span>Registered Customers</span>
                                <p>If you have an account, sign in with your email address.</p>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" required />

                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" required />

                                <button type="submit">sign in</button><br />

                                <span>New Customers</span>
                                <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>

                                <button type="button" onClick={()=>{nav('/signin')}}>create an account</button><br />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login;