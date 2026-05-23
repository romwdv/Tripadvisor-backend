import express from "express";
import cors from "cors";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/form", (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json("OK");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.all(/.*/, (req, res) => {
  try {
    res.status(404).json("Not found");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.listen(3000, () => {
  console.log("Serveur On 🚀");
});
