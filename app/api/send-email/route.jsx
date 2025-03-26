import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { senderName, senderEmail, senderSubject, message } = await req.json();

    if (!senderName || !senderEmail || !senderSubject || !message) {
      return new Response(JSON.stringify({ error: "กรุณากรอกข้อมูลให้ครบ" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: senderEmail,
      to: process.env.EMAIL_USER,
      subject: `Contact: ${senderSubject}`,
      text: `Name: ${senderName}\nEmail: ${senderEmail}\nSubject: ${senderSubject}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "ไม่สามารถส่งอีเมลได้" }), { status: 500 });
  }
}
