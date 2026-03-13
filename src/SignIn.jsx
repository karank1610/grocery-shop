const SingIn = () => {
    return (
        <>
            <div className="signin-main">
                <div className="container">

                    <span className="signin-heading">Create New Customer Account</span>

                    <div className="signin-inner">

                        <div className="signin-form">

                            <form>
                                <span>Personal Information</span>
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" id="firstname" required />

                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" id="lastname" required />

                                <div className="newsletter">
                                    <input type="checkbox" name="newsletter" id="newsletter" />
                                    <label htmlFor="newsletter">Sign Up for Newsletter</label>
                                </div>

                                <span>Sign-in Information</span>

                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" required />

                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" required />

                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input type="password" id="confirm-password" required />

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