import React from 'react';

// import components
import LoginModal from '../../components/LoginModal';
import SignupModal from '../../components/SignupModal';

function Landing() {
    return (
        <div>
            <section className="landingHero">
                    <span><h1 className="title">Quapp</h1></span>
                <div className="loginSignupBtn">
                    <LoginModal/>
                    <SignupModal/>
                </div>
            </section>
        </div>
    );
};

export default Landing;