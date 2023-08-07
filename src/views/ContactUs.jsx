import { Box } from "@mui/material"
import { ContactForm } from "../components/ContactForm"

export const ContactUs = () => {
    return (
        <Box sx={{
            alignItems: 'center',
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
        }}>
            <ContactForm />
        </Box>
    )
}
