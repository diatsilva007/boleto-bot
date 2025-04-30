const cron = require("node-cron");
const fs = require("fs");
const { diasParaVencimento } = require("../utils/formatters");

function agendarLembretes(client, numeroAlvo) {
  cron.schedule("0 9 * * *", () => {
    // Executa todos os dias às 9h
    console.log("⏰ Verificando boletos...");

    try {
      const boletos = JSON.parse(fs.readFileSync("./boletos.json"));

      boletos.forEach((boleto) => {
        const diasRestantes = diasParaVencimento(boleto.vencimento);
        console.log(
          `📅 Boleto: ${boleto.nome} - Dias para vencer: ${diasRestantes}`
        );

        if (diasRestantes === 3 || diasRestantes === 0) {
          const msg =
            diasRestantes === 3
              ? `🔔 Lembrete: o boleto *${boleto.nome}* vence em 3 dias. Valor: R$${boleto.valor}`
              : `⚠️ Hoje vence o boleto *${boleto.nome}*! Valor: R$${boleto.valor}`;

          client.sendMessage(numeroAlvo, msg);
        }
      });
    } catch (err) {
      console.error("❌ Erro ao ler boletos.json:", err.message);
    }
  });
}

module.exports = { agendarLembretes };
