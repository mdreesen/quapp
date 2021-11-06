import React from 'react';
import './landingpage.css';

// import components
import LoginForm from '../../components/LoginForm';
import SignupModal from '../../components/SignupModal';

function Landing() {
    return (
        <div className="">
            <section className="landingHero">
                <span><h1 className="title">Quapp</h1></span>
                <div className="login_signup">
                    <div className="login_signup_forms">
                        <h2>Login</h2>
                        <LoginForm />
                    </div>
                    <div className="login_signup_forms">
                        <h2>Sign Up</h2>
                        <SignupModal />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;