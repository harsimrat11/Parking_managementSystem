import React, { useState } from 'react';

const BookingPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        vehicleType: '',
        licensePlate: '',
        bookingDate: '',
        bookingTime: '',
        duration: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to server)
        console.log('Booking data:', formData);
        alert('Booking submitted successfully!');
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            vehicleType: '',
            licensePlate: '',
            bookingDate: '',
            bookingTime: '',
            duration: '',
        });
    };

    return (
        <div className="booking-container">
            <h2>Car Parking Booking</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                    <label>Vehicle Type:</label>
                    <input type="text" name="vehicleType" value={formData.vehicleType} onChange={handleChange} required />
                </div>
                <div>
                    <label>License Plate:</label>
                    <input type="text" name="licensePlate" value={formData.licensePlate} onChange={handleChange} required />
                </div>
                <div>
                    <label>Booking Date:</label>
                    <input type="date" name="bookingDate" value={formData.bookingDate} onChange={handleChange} required />
                </div>
                <div>
                    <label>Booking Time:</label>
                    <input type="time" name="bookingTime" value={formData.bookingTime} onChange={handleChange} required />
                </div>
                <div>
                    <label>Duration (hours):</label>
                    <input type="number" name="duration" value={formData.duration} onChange={handleChange} required />
                </div>
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default BookingPage;