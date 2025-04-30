# 🤖 Boleto Bot – Lembretes de Pagamento via WhatsApp

> Este projeto é um bot de WhatsApp que envia **lembretes automáticos de vencimento de boletos** diretamente para seu número. Ideal para quem quer **evitar atrasos em contas pessoais ou organizar cobranças recorrentes**.

## 📦 Funcionalidades

- 🔁 Agendamento automático de verificação de boletos (a cada minuto).
- 🔔 Lembrete 3 dias antes do vencimento.
- ⚠️ Alerta no dia do vencimento.
- 💬 Envio automático de mensagens pelo WhatsApp.
- 📄 Armazenamento local dos boletos em um arquivo JSON.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)
- [puppeteer](https://pptr.dev/)
- [node-cron](https://github.com/kelektiv/node-cron)
- [dayjs](https://day.js.org/)
- [qrcode-terminal](https://github.com/gtanner/qrcode-terminal)

---

## ⚙️ Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/boleto-bot.git
```

### 2. Entre na pasta do projeto

```bash
cd boleto-bot
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Crie o arquivo boletos.json com um exemplo de boleto

```bash
[
  {
    "nome": "Conta de Teste",
    "vencimento": "2025-04-29",
    "valor": 123.45
  }
]

```

### 5. Inicie o bot

```bash
node index.js
```
> Um QR Code aparecerá no terminal. Escaneie com o seu WhatsApp para autenticar o bot.

### 6. Caso dê erro ao tentar reiniciar o bot, rode o seguinte comando:

```bash
rmdir /s /q .wwebjs_auth
```
> Se o QRCode não reinicar rode o comando acima e em seguida inicie o bot novamente.

## 💡 Observações importantes

- O bot não envia mensagens para o próprio número que escaneou o QR code. Use outro número como destinatário.

- O WhatsApp exige que você tenha enviado ao menos uma mensagem manualmente para o número de destino, antes que o bot possa enviar.

- O número deve estar no formato:

```bash
const numeroAlvo = "55DDDNÚMERO@c.us"; // Exemplo: "553599999999@c.us"
```

<div align="center">
  
# Feito com 💙
| [<img src="https://avatars.githubusercontent.com/u/143373573?v=4" width="100" height="100"><br><sub>Diogo Ataide</sub>](https://github.com/diatsilva007)
| :---: |

 <p><img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/></p>
 
 # 🙅‍♂️
 
 </div>
