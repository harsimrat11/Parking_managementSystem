import React, { useState, useEffect } from 'react';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        "https://img.freepik.com/free-vector/parking-concept-illustration_114360-6554.jpg?t=st=1732079125~exp=1732082725~hmac=1481ec85ef5eb9f6d79b287987908c918accac325420f7817a20124e5fa40b6d&w=740",
        "https://img.freepik.com/free-vector/underground-car-parking-garage-with-vacant-places_107791-1736.jpg?ga=GA1.1.1841738544.1732079121&semt=ais_hybrid",
        "https://img.freepik.com/free-vector/3d-isometric-multi-storey-parking-with-territory_1441-2484.jpg?ga=GA1.1.1841738544.1732079121&semt=ais_hybrid"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [slides.length]);

    return (
        <div className="home-container">
            <div className="image-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                        <img src={slide} alt={`Car Parking ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="profile-option">
                <h2 className="pkr">WELCOME TO THE PARKING MANAGEMENT SYSTEM</h2>
                <a href="/profile" className="profile-link">Go to Profile</a>
            </div>
        </div>
    );
};

export default Home;