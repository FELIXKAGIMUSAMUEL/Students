// PaymentForm.jsx

import React, { useState } from 'react';
import { Form, Button, ProgressBar } from 'react-bootstrap';
import {
  CreditCard,
  Cash,
  Check,
  Phone,
} from 'react-bootstrap-icons';  

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [totalCost, setTotalCost] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleConfirmPayment = () => {
    // Implement logic to confirm payment (e.g., send to backend, update status)
    setIsPaymentConfirmed(true);
  };

  return (
    <div className="payment-form-container">

      {!isPaymentConfirmed ? (
        <Form>
          <Form.Group controlId="paymentMethod" style={{ marginBottom: '20px' }}>
  <Form.Label style={{ marginBottom: '10px' }}>Select Payment Method</Form.Label>
  <div className="payment-method-options" style={{ display: 'flex', gap: '20px' }}>
    <div
      className={`payment-method-option ${
        paymentMethod === 'visa' ? 'selected' : ''
      }`}
      onClick={() => handlePaymentMethodChange('visa')}
      style={{ cursor: 'pointer', textAlign: 'center' }}
    >
      <CreditCard size={30} />
      <span>Visa</span>
    </div>
    <div
      className={`payment-method-option ${
        paymentMethod === 'mastercard' ? 'selected' : ''
      }`}
      onClick={() => handlePaymentMethodChange('mastercard')}
      style={{ cursor: 'pointer', textAlign: 'center' }}
    >
      <CreditCard size={30} />
      <span>Mastercard</span>
    </div>
    <div
      className={`payment-method-option ${
        paymentMethod === 'mtnMomo' ? 'selected' : ''
      }`}
      onClick={() => handlePaymentMethodChange('mtnMomo')}
      style={{ cursor: 'pointer', textAlign: 'center' }}
    >
      <Phone size={30} />
      <span>MTN </span>
    </div>
    <div
      className={`payment-method-option ${
        paymentMethod === 'airtelMoney' ? 'selected' : ''
      }`}
      onClick={() => handlePaymentMethodChange('airtelMoney')}
      style={{ cursor: 'pointer', textAlign: 'center' }}
    >
      <Phone size={30} />
      <span>Airtel</span>
    </div>
  </div>
</Form.Group>

          <Form.Group controlId="totalCost">
            <Form.Label>Total Cost</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter total cost"
              value={totalCost}
              onChange={(e) => setTotalCost(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="depositAmount">
            <Form.Label>Deposit Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter deposit amount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleConfirmPayment} style={{marginTop: '2rem', backgroundColor: 'hsl(214,57%,51%)'}}>
            Confirm Payment
          </Button>
        </Form>
      ) : (
        <div>
          <h2>Payment Confirmed</h2>
          <p>Thank you for your payment!</p>
          {/* You can provide additional confirmation details or redirects here */}
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
