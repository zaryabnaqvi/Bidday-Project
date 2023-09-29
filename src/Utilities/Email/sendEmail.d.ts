import * as nodemailer from 'nodemailer';
export declare const transporter: nodemailer.Transporter<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
export declare const sendEmail: (toEmail: string, subject: string, body: string) => Promise<void>;
