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
    email,
  } = req.body;

  const mailOptions = {
    // Update your email here
    to: process.env.SUPPORT_EMAIL,
    from: `New subscriber to ${process.env.SUPPORT_EMAIL} newsletter!`,
    subject: `PCS Newsletter Subscription from ${email}`,
    text: `${email} just subscriber to ${process.env.SUPPORT_EMAIL} newsletter!`,
    html: `
    <div className="header" style="background-color: #f2f2f2; padding: 20px 0; text-align: center;">
        <h1>Newsletter Subscription from ${email}</h1>
    </div>
    <div className="content" style="padding: 20px;">
        <h5>User ${email} subscribed to your news letter!</h5>
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
