"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = exports.transporter = void 0;
const nodemailer = require("nodemailer");
exports.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "zaryab.110786@gmail.com",
        pass: "ilhp qnna xmkz xwzk",
    },
});
const sendEmail = async (toEmail, subject, body) => {
    exports.transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Server is ready to take our messages');
        }
    });
    await exports.transporter.sendMail({
        from: "zaryab.110786@gmail.com",
        to: toEmail,
        subject: subject,
        text: subject,
        html: body,
    }, async (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
            return info;
        }
    });
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=sendEmail.js.map