import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tucorreo@gmail.com',
        pass: 'tucontraseña',
      },
    });

    const mailOptions = {
      from: email,
      to: 'nesto12lozada@gmail.com',
      subject: `Mensaje de ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Correo enviado exitosamente');
    } catch (error) {
      console.error('Error al enviar correo:', error);
      res.status(500).send('Error al enviar el correo');
    }
  } else {
    res.status(405).send('Método no permitido');
  }
}
