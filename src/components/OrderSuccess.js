import { Card } from '@mui/material';
import React from 'react'

export default function OrderSuccess() {
    const styles = {
        color: "green"
    };
    return (
        <div className="success">
            <Card className='order-success'>
                <h3 style={styles}>Order successfully placed.</h3>
                <h4>Thank you for Ordered Check your mail to Track Food. Visit again.</h4>
            </Card>
        </div>
    )
}
