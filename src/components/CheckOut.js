import { Button, Card, TextField } from '@mui/material'
import React from 'react'

export default function CheckOut() {
    return (
        <div className='checkout'>
            <Card className='checkout-cart'>
                <h3>Shipping Address Details</h3>
                <TextField
                    name="name"
                    label="Name"
                    variant="outlined"
                    className='checkout-field'
                />
                <TextField
                    name="address"
                    label="Address"
                    variant="outlined"
                    className='checkout-field'
                />
                <TextField
                    name="postalcode"
                    label="Postalcode"
                    variant="outlined"
                    type='number'
                    className='checkout-field'
                />
                <div className="card-details">
                    <h4>Enter card details</h4>

                    <TextField className='checkout-field'
                        variant="standard"
                        label="Card Number"
                        type='number' />

                    <div className="card-footer">
                        <TextField
                            variant="standard"
                            label="Exp Date"
                            type='number' />

                        <TextField
                            variant="standard"
                            label="CVV Number" 
                            type='number'/>
                    </div>
                </div>
                <br />
                <Button variant='contained' className='checkout-field'>Place Order</Button>
            </Card>
        </div>
    )
}
