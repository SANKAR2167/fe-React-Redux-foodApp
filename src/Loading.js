import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export function Loading() {

  const [timeLeft, setTimeLeft] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // Start
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(interval);
      navigate("/cart/checkout/ordersuccess");
    }

    return () => clearInterval(interval);
  }, [timeLeft,]);

  return (
    <div className="loading">
      <h3>Order Processing Please Wait...</h3>
      <span className="count">{timeLeft}</span>
    </div>
  );
}
