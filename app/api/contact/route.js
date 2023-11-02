import { transporter, mailOptions } from '@/app/config/nodemailer'

export const GET = async (req, res) => {
  return new Response('Hi, my name is Aja Edward')
}

const CONTACT_MESSAGE_FIELD = {
  firstName: 'FirstName',
  lastName: 'LastName',
  email: 'Email',
  phone: 'Phone',
  subject: 'Subject',
  message: 'Message',
}

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce((str, [key, val]) => {
    if (typeof val === 'object' && key in CONTACT_MESSAGE_FIELD) {
      const subData = Object.entries(val).map(([subKey, subVal]) => {
        if (subKey in CONTACT_MESSAGE_FIELD[key]) {
          return `${CONTACT_MESSAGE_FIELD[key][subKey]}: ${subVal}`
        }
        return ''
      })
      str += subData.join('\n') + '\n'
    } else {
      str += `${CONTACT_MESSAGE_FIELD[key]}: ${val}\n`
    }
    return str
  }, '')

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    const label = CONTACT_MESSAGE_FIELD[key]
    let valueContent = val

    if (typeof val === 'object') {
      // Handle nested objects (e.g., keyboards, vocals, etc.)
      const subData = Object.entries(val).map(([subKey, subVal]) => {
        if (subVal) {
          const subLabel = CONTACT_MESSAGE_FIELD[key][subKey]
          return `<div>${subLabel}: ${subVal}</div>`
        }
        return ''
      })
      valueContent = subData.join('')
    }

    return (str += `<div style="display: flex; justify-content: space-between; align-items: center;">
    <h1 style="font-family: Helvetica Neue, Arial, sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 16px; margin: 0; padding: 0; color: #333; width: 30%;">${label}:</h1>
    <div style="font-family: Helvetica Neue, Arial, sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0; padding: 0; color: #333; width: 70%;">${valueContent}</div>
  </div>`)
  }, '')

  return {
    text: stringData,
    html: `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Email Subject</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 600px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            margin: 20px auto;
            padding: 20px;
            text-align: center;
        }
        .header {
            padding: 10px;
            background-color: #f9004d;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: center
            border-radius: 20px;
        }
        .header img {
            width: 300px;
        }
        .content {
            padding: 20px;
            font-size: 18px;
            color: #555;
        }
        .footer {
            padding: 5px;
            text-align: center;
            background-color: #f9004d;
            color: #ffffff;
        }
        .footer p {
            font-size: 14px;
            color: #777;
        }
        .footer a {
            color: #0077cc;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header" style="background-image: url("/aboutus.jpg" alt="Ihems services"),
         background-position: center, background-repeat: no-repeat, background-size: cover">
         <img src =${adiolelogo} alt="ihemseepro logo"/>
         <div className="email_header">
         <h1>Ihemsi Adiele and sons</h1>
         <p>We are always ready to provide you with best service</p>
         </div>
        </div>
        <div class="content">
            <h2>New Contact Message</h2>
            <div>
                  ${htmlData}
            </div>
        </div>
        <div class="footer" style="background-color: #f9004d, padding: 15px 20px">
            <p>
                If you have any questions, contact us at
                <a href="mailto:ihemseepro@gmail.com">ihemseepro@gmail.com</a>
            </p>
        </div>
    </div>
</body>
</html>            
`,
  }
}

export const POST = async (req) => {
  if (req.method === 'POST') {
    const body = await req.json()
    if (!body.firstName || !body.lastName || !body.email || !body.subject) {
      return new Response('Bad Request', { status: 400 })
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(body),
        subject: body.subject,
      })
      console.log('This is the body', body)
      return new Response({ success: true }, { status: 200 })
    } catch (error) {
      console.log(error)
      return new Response({ message: error.message }, { status: 400 })
    }
  }
}
