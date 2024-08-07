import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { ConsultationResponseEmail } from "../../emails/consultation-response";
import path from "path";

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   secure: true,
//   auth: {
//     user: process.env.SUPPORT_EMAIL,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
//   auth: {
//     user: process.env.SUPPORT_EMAIL,
//     pass: process.env.EMAIL_PASS,
//   },
//   tls: {
//     // Do not fail on invalid certs
//     rejectUnauthorized: false,
//   },
// });

// const transporter = nodemailer.createTransport({
// 	host: "smtp.office365.com",
// 	port: 587,
// 	secure: false,
// 	auth: {
// 		user: "contact@usshape.org",
// 		pass: "786@USshape~",
// 	},
// });

const transporter = nodemailer.createTransport({
  host: "premium219.web-hosting.com",
  port: Number(587),
  secure: false,
  auth: {
    user: "support@providerconcerns.com",
    pass: "=gK$5UH]x1#U",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default async (req, res) => {
  const { name, email } = req.body;

  const consultationMail = render(
    <ConsultationResponseEmail name={name} email={email} />
  );

  const mailOptions = {
    // Update your email here
    to: email,
    from: "Provider Concerns Solutions <support@providerconcerns.com>",
    subject: `Thank you, ${name}! for contacting Provider Concerns Solutions.`,
    html: consultationMail,
    attachments: [
      {
        filename: "PCS Company Profile.pdf",
        path: path.resolve("public/pdfs/PCS_Company_Profile.pdf"),
        contentType: "application/pdf",
      },
      {
        filename: "Pricing Plans.pdf",
        path: path.resolve("public/pdfs/Pricing Plans.pdf"),
        contentType: "application/pdf",
      },
    ],
  };
  
  try {
    console.log("__dirname: ", __dirname);
    await transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "EMAIL_SEND_ERROR" });
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

export const config = {
  api: {
    externalResolver: true,
  },
};
