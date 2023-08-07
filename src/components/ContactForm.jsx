import { Box, Button, FormControl, TextField } from '@mui/material';
import { useState } from 'react';

export const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted values:', { name, email });
        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl sx={{ display: 'flex', gap: 2 }}>
                <TextField
                    placeholder="Enter your name"
                    label="Name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    placeholder="Enter your email"
                    label="Email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </FormControl>
        </form>
    )
}
