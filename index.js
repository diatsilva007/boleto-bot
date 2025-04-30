// Este código é um bot do WhatsApp que envia lembretes diários para um número específico.

const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const { agendarLembretes } = require("./services/scheduler");

// Substitua pelo seu número no formato 55 + DDD + número (sem espaços ou traços)
const numeroAlvo = "5535991800788@c.us";

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ Bot conectado e pronto!");
  agendarLembretes(client, numeroAlvo);
});

client.initialize();
