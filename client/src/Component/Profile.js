import React, { useState } from 'react';
// import '../Styles/profile.css';

const Profile = () => {
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

    const handleToggle = () => {
        setIsLogin(!isLogin); // Toggle the form
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Handle login form submission
        console.log('Login submitted:', {
            email: e.target.email.value,
            password: e.target.password.value,
        });
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        // Handle signup form submission
        console.log('Sign Up submitted:', {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
        });
    };

    return (
        <div className="profile-container">
            <div className="card">
                <div className="card_title">
                    <h1>{isLogin ? 'Login' : 'Create Account'}</h1>
                    <span>
                        {isLogin ? (
                            <>
                                Don't have an account?{' '}
                                <button onClick={handleToggle} className="toggle-btn">Sign Up</button>
                            </>
                        ) : (
                            <>
                                Already have an account?{' '}
                                <button onClick={handleToggle} className="toggle-btn">Login</button>
                            </>
                        )}
                    </span>
                </div>
                <div className="form">
                    {isLogin ? (
                        <form onSubmit={handleLoginSubmit}>
                            <input type="email" name="email" placeholder="Email" required />
                            <input type="password" name="password" placeholder="Password" required />
                            <button type="submit" className="btn">Login</button>
                        </form>
                    ) : (
                        <form onSubmit={handleSignUpSubmit}>
                            <input type="text" name="username" placeholder="Username" required />
                            <input type="email" name="email" placeholder="Email" required />
                            <input type="password" name="password" placeholder="Password" required />
                            <button type="submit" className="btn">Sign Up</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;