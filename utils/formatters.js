// Formata os números para o padrão brasileiro (ex: 1.234,56)
const dayjs = require("dayjs");

function diasParaVencimento(dataVencimento) {
  const hoje = dayjs().startOf("day");
  const vencimento = dayjs(dataVencimento);
  return vencimento.diff(hoje, "day");
}

module.exports = { diasParaVencimento };
