import express from "express";
import cors from "cors";
import { MailerSend, Sender, Recipient, EmailParams } from "mailersend";
import "dotenv/config";
import { BrevoClient } from "@getbrevo/brevo";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/form", async (req, res) => {
  try {
    const { firstname, lastname, email, sujet } = req.body;
    console.log(req.body);

    const brevo = new BrevoClient({ apiKey: process.env.BREVO_API_KEY });

    const response = await brevo.transactionalEmails.sendTransacEmail({
      subject: "Mail test",
      htmlContent: `<html><body><p>${sujet}</p></body></html>`,
      sender: {
        name: process.env.BREVO_SENDER_NAME,
        email: process.env.BREVO_SENDER_EMAIL,
      },
      to: [{ email: email, name: `${lastname} ${firstname}` }],
    });

    console.log(response);

    res.status(200).json("OK");
  } catch (err) {
    if (err instanceof UnauthorizedError) {
      console.error("Invalid API key");
    } else if (err instanceof TooManyRequestsError) {
      const retryAfter = err.rawResponse.headers["retry-after"];
      console.error(`Rate limited. Retry after ${retryAfter}s`);
    } else if (err instanceof BrevoError) {
      console.error(`API error ${err.statusCode}:`, err.message);
    }
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
