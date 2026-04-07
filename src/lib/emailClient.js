import { SMTPClient } from "emailjs";

export const client = new SMTPClient({
    user: process.env.REACT_APP_EMAIL_USER,
    password: process.env.REACT_APP_EMAIL_PASS,
    host: "smtp.tuservidor.com",
    ssl: true,
});
