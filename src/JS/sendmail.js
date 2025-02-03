// CASO ALGUM DIA SEJA NECESSÁRIO ENVIAR EMAIL PELO NODE.JS

document.getElementById('send').addEventListener('click', function (event) {
   event.preventDefault(); // Previne o reload do formulário
   sendMail("spikedph@gmail.com", "This is SUBJECT", "This is SUBJECT");
});

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(
    {
        secure: true,
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'ruanlimafn@gmail.com',
            pass: 'aexv yega clgb iizz'
        }
    }
);

function sendMail(to, sub, msg) {
    transporter.sendMail(
        {to:to,
         subject:sub,
         html:msg
        });

        console.log('Email sent');

    }


// aexv yega clgb iizz
