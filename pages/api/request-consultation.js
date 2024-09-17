import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SUPPORT_EMAIL,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

const mailer = nodemailer.createTransport(transporter);

export default async (req, res) => {
  const {
    name,
    email,
    monthlyBilling,
    businessName,
    number,
    providers,
    totalAR,
    text,
  } = req.body;

  const mailOptions = {
    // Update your email here
    to: process.env.SUPPORT_EMAIL,
    from: `Consultation Request from ${name} ${process.env.SUPPORT_EMAIL}`,
    subject: `Consultation Request from ${name}`,
    text: text,
    html: `
    <div className="header" style="background-color: #f2f2f2; padding: 20px 0; text-align: center;">
        <h1>Consultation Request from ${name}</h1>
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
                <td style="padding: 10px; border: 1px solid #ddd;">${number}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Business Name:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${businessName}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Monthly Billing:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${monthlyBilling}</td>
            </tr><tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Providers:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${providers}</td>
            </tr><tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Total AR:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${totalAR}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Message:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${text}</td>
            </tr>
        </table>
    </div>`,
  };
  try {
    transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
      }

	  if (info?.accepted?.length !== 0) {
        console.log("Email sent INFO: " + JSON.stringify(info));
        return res.status(200).json({ message: "EMAIL_SENT_SUCCESS" });
      } else if (info?.rejected?.length === 0) {
        return res.status(500).json({ message: "EMAIL_SEND_REJECTED" });
      }
	  
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error_proccessing_charge");
  }
};
