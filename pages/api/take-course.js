import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SUPPORT_EMAIL,
    pass: process.env.EMAIL_PASS,
    // pass: "=gK$5UH]x1#U",
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

const mailer = nodemailer.createTransport(transporter);

export default async (req, res) => {
  const { name, email, subject, phone, message } = req.body;

  console.log("CONTENT _: ", {
    name,
    email,
    subject,
    phone,
    message,
  });

  const mailOptions = {
    // Update your email here
    to: `Provider Concerns Consultation - <${process.env.SUPPORT_EMAIL}>`,
    from: email,
    subject: `Course Registered By ${name}`,
    text: message,
    html: `
    <div className="header" style="background-color: #f2f2f2; padding: 20px 0; text-align: center;">
        <h1>Course Registered By ${name}</h1>
    </div>
    <div className="content" style="padding: 20px;">
        <table style="border-collapse: collapse; width: 100%;">
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Name:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Subject:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${subject}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Message:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
            </tr>
        </table>
    </div>`,
  };
  try {
    transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        console.log(error);
        return res.status(500).send({ message: "EMAIL_SEND_ERROR" });
      }

      return res.status(200).send({ message: "EMAIL_SENT_SUCCESS" });
    });
    // res.status(200).send("Email send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error_proccessing_charge");
  }
};
