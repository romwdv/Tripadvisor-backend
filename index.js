import express from "express";
import cors from "cors";
import { MailerSend, Sender, Recipient, EmailParams } from "mailersend";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/form", async (req, res) => {
  try {
    const { firstname, lastname, email, sujet } = req.body;
    console.log(req.body);
    const mailersend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY,
    });
    const sentFrom = new Sender(
      "you@test-ywj2lpn52dpg7oqz.mlsender.net",
      "Rom",
    );
    const recipient = [new Recipient(email, firstname)];
    const messObjet = "Mail test Trip";

    const Emailparametres = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipient)
      .setSubject(messObjet)
      .setHtml("<strong>" + sujet + "</strong>")
      .setText(sujet);

    const response = await MailerSend.email.send(Emailparametres);

    res.status(200).json("OK");
  } catch (error) {
    console.error("Erreur :", error);
    res.status(500).json(error.message);
  }
});

app.all(/.*/, (req, res) => {
  try {
    res.status(404).json("Not found");
  } catch (error) {
    console.error("Erreur :", error);
    res.status(500).json(error.message);
  }
});

app.listen(process.env.PORT, () => {
  console.log("Serveur On 🚀");
});
