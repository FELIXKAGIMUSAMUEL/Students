// BookingForm.jsx

import React, { useState } from 'react';
import './Book.css'
import { Form, Button, ProgressBar } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PaymentForm from './payment';
 
 
const BookingForm = () => {
  const [formData, setFormData] = useState({
    // Initial form data
    fullName: '',
    contactNumber: '',
    email: '',
    homeAddress: '',
    checkInDate: null,
    checkOutDate: '',
    roomType: '',
    numberOfGuests: '',
    institutionName: '',
    programDetails: '',
    specialRequests: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    relationshipToGuest: '',
    // Add more fields as needed
  });

  const [progress, setProgress] = useState(0);

  const handleNextStep = () => {
    setProgress(progress + 1);
  };

  const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
  console.log(`${name}: ${value}`);
};



  return (
    <>
    
    <div className="booking-form-container">
      <div>
      <ProgressBar now={progress * 20} 
    //   label={`${progress + 1}. Personal Information`}
    style={{ marginLeft: '37%', marginRight: '37%', marginTop: '3.5rem', color: 'hsl(214,57%,51%)'}}
       />
      </div>
      <Form>
        {/* Step 1: Personal Information */}
        {progress === 0 && (
          <div>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              {/* <option value="other">Other</option> */}
            </Form.Control>
          </Form.Group>
            <Form.Group controlId="contact">
              <Form.Label>Phone Contact</Form.Label>
              {/* <Form.Control
              value={formData.contactNumber}
                type="tel"
                name="contact"
                
                onChange={handleInputChange}
                placeholder="Phone Number"
                
                
              /> */}
              <Form.Control
              type="tel"
              name="contact"
              value={formData.emergencyContact}
              onChange={handleInputChange}
              placeholder="Enter contact"
            />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            {/* Add other personal information fields */}
            <Button variant="primary" onClick={handleNextStep} style={{backgroundColor: 'hsl(214,57%,51%)'}}>
              Next
            </Button>
          </div>
        )}

        {/* Step 2: Booking Details */}
        {progress === 1 && (
          <div>
            <Form.Group controlId="checkInDate">
            <Form.Label>Check-in Date</Form.Label>
            <DatePicker
              selected={formData.checkInDate}
              onChange={(date) => setFormData({ ...formData, checkInDate: date })}
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              className="form-control"
            />
            </Form.Group>
          <Form.Group controlId="roomType">
            <Form.Label>Room Type</Form.Label>
            <Form.Control
              as="select"
              name="roomType"
              value={formData.roomType}
              onChange={handleInputChange}
            >
              <option value="">Select Room Type</option>
              <option value="single">Single Room</option>
              <option value="double">Double Room</option>
              {/* Add more room types as needed */}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="specialRequests">
            <Form.Label>Special Requests</Form.Label>
            <Form.Control
              as="textarea"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              maxLength={100} // Set your desired maximum length
              rows={4} // Set the number of rows for the textarea
              placeholder="Specify any special requests (max 100 words)"
            />
            <small>
              {`${(formData.specialRequests || '').split(' ').length}/100 words`} {/* Display word count */}
            </small>
          </Form.Group>
            <Button variant="primary" onClick={handleNextStep} style={{backgroundColor: 'hsl(214,57%,51%)'}}>
              Next
            </Button>
          </div>
        )}

        {/* Step 3: Student Information */}
        {progress === 2 && (
          <div>
             <Form.Group controlId="institutionName">
            <Form.Label>Name of Institution</Form.Label>
            <Form.Control
              type="text"
              name="institutionName"
              value={formData.institutionName}
              onChange={handleInputChange}
              placeholder="Enter name of institution"
            />
          </Form.Group>
          <Form.Group controlId="programDetails">
            <Form.Label>Course or Program Details</Form.Label>
            <Form.Control
              type="text"
              name="programDetails"
              value={formData.programDetails}
              onChange={handleInputChange}
              placeholder="Enter course or program details"
            />
          </Form.Group>
            <Button variant="primary" onClick={handleNextStep} style={{backgroundColor: 'hsl(214,57%,51%)'}}>
              Next
            </Button>
          </div>
        )}

        {/* Step 4: Emergency Contact */}
        {progress === 3 && (
          <div>
            
            <Form.Group controlId="emergencyContactName">
            <Form.Label>Emergency Contact Name</Form.Label>
            <Form.Control
              type="text"
              name="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={handleInputChange}
              placeholder="Enter emergency contact name"
            />
          </Form.Group>
          <Form.Group controlId="emergencyContact">
            <Form.Label>Emergency Contact</Form.Label>
            <Form.Control
              type="tel"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleInputChange}
              placeholder="Enter emergency contact number"
            />
          </Form.Group>
            <Form.Group controlId="emergencyRelationship">
            <Form.Label>Relationship</Form.Label>
            <Form.Control
              type="text"
              name="emergencyRelationship"
              value={formData.emergencyRelationship}
              onChange={handleInputChange}
              placeholder="Enter relationship (e.g., parent, sibling)"
            />
          </Form.Group>
            <Button variant="primary" onClick={handleNextStep} style={{backgroundColor: 'hsl(214,57%,51%)'}}>
              Next
            </Button>
          </div>
        )}

        {/* Step 5: Payment Details */}
        {progress === 4 && (
        //   <div>
        //     <Form.Group controlId="paymentMethod">
        //     <Form.Label>Select Payment Method</Form.Label>
        //     <div className="payment-method-options">
        //       <div
        //         className={`payment-method-option ${
        //           paymentMethod === 'creditCard' ? 'selected' : ''
        //         }`}
        //         onClick={() => handlePaymentMethodChange('creditCard')}
        //       >
        //         <CreditCard size={40} />
        //         <span>Credit Card</span>
        //       </div>
        //       <div
        //         className={`payment-method-option ${
        //           paymentMethod === 'cash' ? 'selected' : ''
        //         }`}
        //         onClick={() => handlePaymentMethodChange('cash')}
        //       >
        //         <Cash size={40} />
        //         <span>Cash</span>
        //       </div>
        //       <div
        //         className={`payment-method-option ${
        //           paymentMethod === 'check' ? 'selected' : ''
        //         }`}
        //         onClick={() => handlePaymentMethodChange('check')}
        //       >
        //         <Check size={40} />
        //         <span>Check</span>
        //       </div>
        //     </div>
        //   </Form.Group>
        //   <Form.Group controlId="totalCost">
        //     <Form.Label>Total Cost</Form.Label>
        //     <Form.Control
        //       type="number"
        //       placeholder="Enter total cost"
        //       value={totalCost}
        //       onChange={(e) => setTotalCost(e.target.value)}
        //     />
        //   </Form.Group>
          
        //   <Form.Group controlId="depositAmount">
        //     <Form.Label>Deposit Amount</Form.Label>
        //     <Form.Control
        //       type="number"
        //       placeholder="Enter deposit amount"
        //       value={depositAmount}
        //       onChange={(e) => setDepositAmount(e.target.value)}
        //     />
        //   </Form.Group>
        //     <Button variant="success">Submit</Button>
        //   </div>
        <PaymentForm/>
        )}
      </Form>
    </div>
    </>
  );
        };

export default BookingForm;

        
