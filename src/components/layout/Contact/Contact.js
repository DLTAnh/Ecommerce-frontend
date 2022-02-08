import React from "react";
import "./Contact.css";
import Button from '@mui/material/Button';

const Contact = () => {
    return (
        <div className="contactContainer">
            <a className="mailBtn" href="mailto:shop24htest@gmail.com">
                <Button  sx={{ my: 2, color: 'black', display: 'block' }}>Contact: shop24htest@gmail.com</Button>
            </a>
        </div>
    );
};

export default Contact;