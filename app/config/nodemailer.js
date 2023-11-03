import nodemailer from 'nodemailer'

const email = process.env.GMAIL_ADDRESS
const pass = process.env.GMAIL_PASSWORD
const recipient = process.env.GMAIL_TO

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass,
  },
})

export const mailOptions = {
  from: email,
  to: recipient,
}
