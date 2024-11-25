import React, { useState } from 'react';

const Wallet = () => {
    const [balance, setBalance] = useState(1000); // Initial balance
    const [bookings, setBookings] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState('UPI');
    const [amount, setAmount] = useState('');

    const handleAddMoney = (e) => {
        e.preventDefault();
        if (amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        // Simulate adding money to the wallet
        setBalance(balance + parseFloat(amount));
        alert(`Successfully added ₹${amount} via ${paymentMethod}`);
        setAmount('');
    };

    const handleBooking = () => {
        const newBooking = `Booking on ${new Date().toLocaleString()}`;
        setBookings([...bookings, newBooking]);
        alert('Booking added successfully!');
    };

    return (
        <div className="wallet-container">
            <h2>Wallet</h2>
            <h3>Current Balance: ₹{balance}</h3>

            <h3>Add Money</h3>
            <form onSubmit={handleAddMoney}>
                <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="UPI">UPI</option>
                    <option value="Debit/Credit Card">Debit/Credit Card</option>
                </select>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    required
                />
                <button type="submit">Add Money</button>
            </form>

            <h3>Your Bookings</h3>
            <button onClick={handleBooking}>Add Booking</button>
            <ul>
                {bookings.map((booking, index) => (
                    <li key={index}>{booking}</li>
                ))}
            </ul>
        </div>
    );
};

export default Wallet;