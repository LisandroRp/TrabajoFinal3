import { createTransport } from 'nodemailer';
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);
const TEST_MAIL = process.env.ADMINEMAIL;

const transporter = createTransport({
    name: 'example.com',
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: 'taya.klein42@ethereal.email',
        pass: '12v4CwCqb1jnqEHQqK'
    },
});

const sendEmail = async (subject, body) => {
    let mail = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: TEST_MAIL, // list of receivers
        subject: subject, // Subject line
        text: body, // plain text body
        html: "<b>" + body + "</b>", // html body
    }
    try {
        let info = await transporter.sendMail(mail)
        console.log("ok")
        console.log(info)
    }
    catch (error) {
        console.log("mal")
        console.log(error)
    }
}

const sendWpp = async (subject, body) => {
    client.messages
        .create({
            from: '+14155238886',
            to: '+5491144373492',
            body: "Hello ✔",
            //mediaUrl: "Hello world?", 
        })
        .then(message => console.log(message.sid))
        .catch(error => {
            console.log("mal")
            console.log(error)
        })
}

export { sendEmail, sendWpp };