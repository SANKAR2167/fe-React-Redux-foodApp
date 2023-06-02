import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function OrderSuccess() {
    const styles = {
        color: "green"
    };

    const [timeLeft, setTimeLeft] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        // Start
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        if (timeLeft === 0) {
            clearInterval(interval);
            navigate("/foods");
        }

        return () => clearInterval(interval);
    }, [timeLeft,]);


    return (
        <div className="success">
            <Card className='order-success'>
                <h3 style={styles}>Order successfully placed.</h3>
                <h4>Thank you for Ordered Check your mail to Track Food. Visit again.</h4>
            </Card>

            <h2>Please wait.....   {timeLeft}</h2>
        </div>
    )
}
