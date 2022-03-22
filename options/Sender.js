import { createTransport } from 'nodemailer';
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID || "AC795bc029cf78d374baf92dbc627e149a";
const authToken = process.env.TWILIO_AUTH_TOKEN || "e4ae702bddaa310d872f7c730233f8ab";
const client = twilio(accountSid, authToken);
const TEST_MAIL = process.env.ADMINEMAIL || "lisandrorp1997@gmail.com";

/* const transporter = createTransport({
    name: 'example.com',
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: 'taya.klein42@ethereal.email',
        pass: '12v4CwCqb1jnqEHQqK'
    },
}); */

const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'taten210@gmail.com',
        pass: 'kusqbbzstfomilfa'
    }
})

const sendEmail = async (subject, body) => {
    let mail = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: TEST_MAIL, // list of receivers
        subject: subject, // Subject line
        text: "body", // plain text body
        /* html: "<b>" + body + "</b>", // html body */
        html: `
        <h1>Welcome to our website! ${body.username}</h1>
        <h3>Username: ${body.username}</h3>
        <h3>Email: ${body.email}</h3>
        <h3>Address: ${body.address}</h3>
        <h3>Age: ${body.age}</h3>
        <h3>Phone: ${body.phone}</h3>
        `, // html body
    }
    try {
        let info = await transporter.sendMail(mail)
        console.log("ok")
        console.log(info)
        return true
    }
    catch (error) {
        console.log("mal")
        console.log(error)
        return false
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