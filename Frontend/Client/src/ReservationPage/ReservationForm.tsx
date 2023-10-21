import '../ReservationPage/ReservationForm.css';
import React, { useState } from 'react';

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    checkInDate: '',
    checkOutDate: '',
    offerID: '',
    userID: '',
    hostelID: '',
    amount: '',
    payStatus: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="reservation-form">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="checkInDate">Check-in Date</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOutDate">Check-out Date</label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="offerID">Offer ID</label>
          <input
            type="text"
            id="offerID"
            name="offerID"
            value={formData.offerID}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userID">User ID</label>
          <input
            type="text"
            id="userID"
            name="userID"
            value={formData.userID}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hostelID">Hostel ID</label>
          <input
            type="text"
            id="hostelID"
            name="hostelID"
            value={formData.hostelID}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="payStatus">Payment Status</label>
          <input
            type="text"
            id="payStatus"
            name="payStatus"
            value={formData.payStatus}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
      <footer className="footer">
        <p>&copy; 2023 Booking App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ReservationForm;